import {Component, OnInit} from "@angular/core";
import {routerTransition} from "../router.animations";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import API from "../API/API";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    constructor(private formBuilder: FormBuilder,
                private router: Router

    ) {
        this.loginForm = this.formBuilder.group({
            'email': new FormControl('', [Validators.required]),
            'password': new FormControl('', [Validators.required])
        });
    }

    ngOnInit() {
    }

    login(user) {
        API.login(user.email, user.password, (response) => {
            console.log("Response", response);
            this.router.navigate(['/products']);
        });
    }
}
