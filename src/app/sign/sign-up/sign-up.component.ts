import { Component, OnInit } from '@angular/core';
import { UserRegistration } from '../../global-services/userRegistration.service'
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
  
  constructor(private userService: UserRegistration, private rota: Router, private formBuilder: FormBuilder) {
   }

  
  
  public user: User = new User();
  public itemPasswordConfirm: string = '';
  itemPassword: string = this.user.password;

  ngOnInit(): void {

  }

  public async newUser() {

    if(this.user.password===this.itemPasswordConfirm){
      if(this.user){
        this.userService.salveNewUser(this.user).subscribe((resposta)=>{
          console.log(resposta);
          this.rota.navigate(['/home']);
        });

      }else{
        alert('Erro ao criar o usuário! Preencha todos os campos!');
      }
    }else{
      alert('As senhas não conferem');

    }

    
  }
}
