import {Component, OnInit} from "@angular/core";
import {routerTransition} from "../router.animations";
import {NgRedux} from "@angular-redux/store";
import {IUserState} from "./store";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SIGNUP} from "./actions";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    signupForm: FormGroup;
    constructor(private ngRedux: NgRedux<IUserState>,
                private formBuilder: FormBuilder) {
        this.signupForm = this.formBuilder.group({
            'name': new FormControl('', [Validators.required]),
            'email': new FormControl('', [Validators.required]),
            'password': new FormControl('', [Validators.required])
        });
    }

    ngOnInit() {
    }

    createUser() {
        this.ngRedux.dispatch({type: SIGNUP});
    }
}
