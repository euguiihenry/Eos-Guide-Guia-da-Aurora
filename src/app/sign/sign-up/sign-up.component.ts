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
    this.userForm = this.formBuilder.group({
      nome: ['', Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.required
      ])],
      sobrenome: ['', Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.required
      ])],
      usuario:['', Validators.compose([
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.required
      ])],
      senha:['', Validators.compose([
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.required
      ])]

    })
   }

  
  
  public user: User = new User();
  public userForm!: FormGroup;
  public itemPasswordConfirm: string = '';
  itemPassword: string = this.user.password;

  ngOnInit(): void {

  }

  public async newUser() {

    if(!this.userForm){

    }else{
      console.log(this.itemPassword);
      if(this.itemPassword===this.itemPasswordConfirm){
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
}
