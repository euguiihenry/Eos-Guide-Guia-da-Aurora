import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../sign/models/user.model'
import { NodeWithI18n } from '@angular/compiler';
import { getLocaleTimeFormat } from '@angular/common';

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
    private cont: number = 5;

    constructor(private http: HttpClient){ }

    public getUser(id: number) : Observable<User>{
        return this.http.get<User>(this.url+'/'+id);
        
    }

    public salveNewUser(user: User) : Observable<any>{
        
        const newUserJSON = JSON.stringify(user);
        return this.http.post(this.url, newUserJSON, httpOptions);
        
    }

    public contUser(): number{
        return this.cont;
    }
}