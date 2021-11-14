import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SignInService {

    public token!: string;
    public isLogin = new EventEmitter<boolean>();


    constructor(private httpClient: HttpClient, private router: Router) { }

    public getLogin(name: string, password: string): Observable<any> {
        return this.httpClient.post('https://autocbe.herokuapp.com/api/login?name='
            + name + '&password=' + password, null, { responseType: 'text' });
    }

    public onLogin(name: string, password: string) {
        return this.getLogin(name, password).subscribe(token => {

            this.token = token;
            this.isLogin.emit(true);
            localStorage.setItem('token', token);
            alert("welcome " + name);
            return this.router.navigate(['/mechanic-page']);

        },
            error => { alert('Something wrong try again' + error); }


        );
    }

    public logOut() {
        localStorage.removeItem('token');
        this.router.navigate(['/home']);
    }
}
