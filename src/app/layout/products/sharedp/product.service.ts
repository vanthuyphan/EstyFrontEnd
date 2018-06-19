import {Observable, of, throwError as observableThrowError} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AppConfig} from "../../../config/app.config";
import {Product} from "./product.model";
import {catchError, tap} from "rxjs/operators";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material";
import {LoggerService} from "../../../core/shared/logger.service";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class ProductService {
  private heroesUrl: string;
  private translations: any;

  static checkIfUserCanVote(): boolean {
    return Number(localStorage.getItem('votes')) < AppConfig.votesLimit;
  }

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
    this.heroesUrl = AppConfig.endpoints.heroes;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      LoggerService.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getHeroes(): Observable<Product[]> {
    return this.http.get<Product[]>(this.heroesUrl)
      .pipe(
        tap(heroes => LoggerService.log(`fetched heroes`)),
        catchError(this.handleError('getHeroes', []))
      );
  }

  getHeroById(id: string): Observable<Product> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      tap(() => LoggerService.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Product>(`getHero id=${id}`))
    );
  }

  createHero(hero: Product): Observable<Product> {
    return this.http.post<Product>(this.heroesUrl, JSON.stringify({
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

  deleteHeroById(id: any): Observable<Array<Product>> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Array<Product>>(url, httpOptions).pipe(
      tap(() => LoggerService.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Array<Product>>('deleteHero'))
    );
  }

  like(hero: Product) {
    if (ProductService.checkIfUserCanVote()) {
      const url = `${this.heroesUrl}/${hero.id}/like`;
      return this.http
        .post(url, {}, httpOptions)
        .pipe(
          tap(() => {
            LoggerService.log(`updated hero id=${hero.id}`);
            localStorage.setItem('votes', '' + (Number(localStorage.getItem('votes')) + 1));
            hero.likes += 1;
            this.showSnackBar('saved');
          }),
          catchError(this.handleError<any>('updateHero'))
        );
    } else {
      this.showSnackBar('heroLikeMaximum');
      return observableThrowError('maximum votes');
    }
  }

  showSnackBar(name): void {
    const config: any = new MatSnackBarConfig();
    config.duration = AppConfig.snackBarDuration;
    this.snackBar.open(this.translations[name], 'OK', config);
  }
}
