import { Component, OnInit } from '@angular/core';
import { UserRegistration } from '../../services/userRegistration.service'
import { Router } from '@angular/router';

import { User } from '../models/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
  
  constructor(private userService: UserRegistration, private rota: Router ) { }

  newUserObj = {};
  itemFirstname: string = '';
  itemLastname: string = '';
  itemUsername: string = '';
  itemPassword: string = '';
  itemPasswordConfirm: string = '';

  ngOnInit(): void {

  }

  public async add() {

    this.newUserObj = ({
      itemFirstname: this.itemFirstname, 
      itemLastname: this.itemLastname, 
      itemUsername: this.itemUsername,
      itemPassword: this.itemPassword,
      itemPasswordConfirm: this.itemPasswordConfirm
    });

    if(this.itemPassword===this.itemPasswordConfirm){
      if(this.itemFirstname && this.itemLastname && this.itemUsername && this.itemPassword){
        this.userService.salveNewUser(this.itemFirstname, this.itemLastname, 
          this.itemUsername, this.itemPassword).subscribe((user: User[])=>{
            console.log(user);
            alert(this.itemFirstname);
            this.rota.navigate(['/home']);
          });

        
      }else{
        alert('Não é possível salvar uma tarefa vazia');
      }
    }else {
      alert('As senhas não conferem');
    }
  
  }
}
