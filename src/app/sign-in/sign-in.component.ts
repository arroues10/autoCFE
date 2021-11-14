import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignInService } from '../sign-in.service';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

    public name!: string;
    public password!: string;

    constructor(private signInService: SignInService, private router: Router) { }

    public signIn(): void {
        this.signInService.onLogin(this.name, this.password);
    }

}
