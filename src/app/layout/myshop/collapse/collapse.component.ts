import {Component} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import API from "../../../API/API";

@Component({
    selector: 'app-collapse',
    templateUrl: './collapse.component.html',
    styleUrls: ['./collapse.component.scss']
})
export class CollapseComponent {
    productCreateForm: FormGroup;
    constructor(private formBuilder: FormBuilder) {
            this.productCreateForm = this.formBuilder.group({
            'name': new FormControl('', [Validators.required]),
            'description': new FormControl('', [Validators.required]),
            'price': new FormControl('', [Validators.required])
        });
    }

    ngOnInit() {
    }

    createProduct(f) {
        API.addProduct(f.name, f.description, f.price, () => {
        });
    }

}
