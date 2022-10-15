import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})

export class UserRegistration {
    
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
    }



    
}