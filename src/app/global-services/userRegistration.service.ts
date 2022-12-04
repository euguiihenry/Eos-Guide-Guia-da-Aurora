import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../sign/models/user.model'
import { NodeWithI18n } from '@angular/compiler';
import { getLocaleTimeFormat } from '@angular/common';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})

export class UserRegistration {
    private url: string = 'http://localhost:3000/user';
    private cont: number = 10;
    public user: User = new User();
    private userAuthenticated: boolean = false;

    constructor(private http: HttpClient, private rota: Router, private save: Storage) { }

    public getUser(id: number): Observable<User> {
        return this.http.get<User>(this.url + '/' + id);

    }

    public salveNewUser(user: User): Observable<any> {

        const newUserJSON = JSON.stringify(user);
        this.saveUserAuth(true);
        this.rota.navigate(['/home']);
        return this.http.post(this.url, newUserJSON, httpOptions);
        

    }

    login(itemPassword: string, itemUsername: string) {
        for (let id: number = 0; id < this.cont; id++) {

            this.getUser(id).subscribe((user: User) => {
                this.user = user;

                if (itemPassword === user.password && itemUsername === this.user.username) {
                    alert('Bem vindo(a)! ' + this.user.firstname + ' ' + this.user.lastname);
                    this.saveUserAuth(true);
                    this.rota.navigate(['/home']);
                }
            });
        }
    }

    saveUserAuth(situation: boolean) {
        localStorage.setItem('userAuth', situation.toString());
    }

    isUserAuthenticated() {
        if(localStorage.getItem('userAuth') == 'true') {
            return true;
        } else {
            return false;
        }
    }
}