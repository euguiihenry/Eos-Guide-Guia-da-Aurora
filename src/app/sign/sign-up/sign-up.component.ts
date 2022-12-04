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

  ngOnInit(): void {

  }

  public async newUser() {


    if((this.user.firstname === '' || this.user.firstname.length<2) ||
      (this.user.lastname === '' || this.user.lastname.length<2) ||
      (this.user.username === '' || this.user.username.length<8) ||  
      (this.user.password === '' || this.user.password.length<8)){
      alert('Preencha os campos corretamente!');
    }else{
      if(this.user.password===this.itemPasswordConfirm){
        this.userService.salveNewUser(this.user).subscribe((resposta)=>{
          console.log(resposta);
          this.rota.navigate(['/home']);
        });

      }else{
        
        alert('As senhas não conferem!');
      }
      

    }

    
  }
}
