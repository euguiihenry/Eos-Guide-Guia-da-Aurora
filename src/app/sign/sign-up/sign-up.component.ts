import { Component, OnInit } from '@angular/core';
import { UserRegistration } from '../../global-services/userRegistration.service'
import { Router } from '@angular/router';

import { User } from '../models/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
  
  constructor(private userService: UserRegistration, private rota: Router ) { }

  itemPassword: string = '';
  itemPasswordConfirm: string = '';
  public user: User = new User();

  ngOnInit(): void {

  }

  public async newUser() {

    if(this.itemPassword===this.itemPasswordConfirm){
      if(this.user){
        this.userService.salveNewUser(this.user).subscribe((resposta)=>{
          console.log(resposta);
          this.rota.navigate(['/home']);
        });

      }else{
        alert('Não é possível salvar uma tarefa vazia');
      }
    }else{
      alert('As senhas não conferem');

    }
  }
}
