import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Product} from "./product.model";
import {catchError, tap} from "rxjs/operators";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material";
import {LoggerService} from "../../../core/shared/logger.service";
import {AppConfig} from "../../../config/app.config";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class ProductService {
  private productsUrl: string;
  private translations: any;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
    this.productsUrl = 'http://127.0.0.1:4040/api/products';
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
      .pipe(
        tap(products => LoggerService.log(`fetched heroes`)),
        catchError(this.handleError('getProducts', []))
      );
  }

  getProductById(id: string): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      tap(() => LoggerService.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Product>(`getHero id=${id}`))
    );
  }

  createProduct(hero: Product): Observable<Product> {
    return this.http.post<Product>(this.productsUrl, JSON.stringify({
      name: hero.name,
      alterEgo: hero.alterEgo
    }), httpOptions).pipe(
      tap((heroSaved: Product) => {
        LoggerService.log(`added hero w/ id=${heroSaved.id}`);
        this.showSnackBar('heroCreated');
      }),
      catchError(this.handleError<Product>('addHero'))
    );
  }

  deleteProductById(id: any): Observable<Array<Product>> {
    const url = `${this.productsUrl}/${id}`;

    return this.http.delete<Array<Product>>(url, httpOptions).pipe(
      tap(() => LoggerService.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Array<Product>>('deleteHero'))
    );
  }

  showSnackBar(name): void {
    const config: any = new MatSnackBarConfig();
    config.duration = AppConfig.snackBarDuration;
    this.snackBar.open(this.translations[name], 'OK', config);
  }
}
