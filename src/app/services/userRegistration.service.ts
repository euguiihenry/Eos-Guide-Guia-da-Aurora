import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../sign/models/user.model'

const httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
};


@Injectable({
     
    providedIn: 'root'
})

export class UserRegistration {
    private url: string = 'http://localhost:3000';

    constructor(private http: HttpClient){ }

    getUser(id: string | undefined, username: string | undefined ) : Observable<any>{
        return this.http.get<User[]>(this.url+"/user/"+id+"?username="+username);
        
    }

    salveNewUser( firstname?: string, 
                lastname?: string, username?: string, 
                password?: string ) : Observable<any>{
        const newUser = {firstname: firstname, lastname:lastname, username: username, password: password};

        
            return this.http.post<User[]>(this.url+'/user',newUser);
        
        
    }
/*
    newUser(user: User) : Observable<any>{
        return this.http.post<User>('http://localhost:3000/user/', user, httpOptions);
    }*/

    /*
    constructor(private storage: Storage) {
        this.init();
    }
    
    public async init() {
        await this.storage.create();
    }

    public async addUser(username: string, value: any) {
        await this.storage.set(username, value);
    }

    public async getUser(username: string){
        let user: any = this.storage.get(username);

        return user;
    }*/



    

    /*public get(id: number): Curso {
    const curso = this.cursos.find( curso=> curso.id === id );
    return curso || new Curso();
    public getAll(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.url);
  }
  }*/ 



    
}