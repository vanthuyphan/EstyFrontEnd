import {Component, OnInit} from "@angular/core";
import {routerTransition} from "../../router.animations";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import API from "../../API/API";
@Component({
  selector: 'app-myshop',
  templateUrl: './myshop.component.html',
  styleUrls: ['./myshop.component.css'],
  animations:[routerTransition()]
})
export class MyshopComponent implements OnInit {

  productCreateForm: FormGroup;
  products = [];
  constructor(private formBuilder: FormBuilder) {
    this.productCreateForm = this.formBuilder.group({
      'name': new FormControl('', [Validators.required]),
      'description': new FormControl('', [Validators.required]),
      'price': new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    API.products((products => {
      this.products = products
    }));

  }
  filterSold(item,checked){
    console.log("--->" + item + " " + checked);
    if (checked == true ) {
      return item.status == "sold";
    }
    return true;
  }

  filterActive(item,checked){
    console.log("--->" + item + " " + checked);
    if (checked == true ) {
      return item.status == "sale";
    }
    return true;
  }

  deleteProduct(item){
    API.deleteProduct(item._id, () => {
      API.products((products => {
        this.products = products
      }));
    });
  }

  createProduct(f) {
    API.addProduct(f.name, f.description, f.price, () => {
      API.products((products => {
        this.products = products
      }));
    });
  }
}
