import { Component, OnInit } from '@angular/core';
import { UserRegistration } from '../../services/userRegistration.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  newUserObj = {};
  itemUsername: string = '';
  itemPassword: string = '';

  itemUsernameAux: string = '';
  itemPasswordAux: string = '';


  constructor(private userRegist: UserRegistration, private rota: Router ) { }

  public async loginUser(){


    let storaged = this.userRegist.getUser(this.itemUsername)
    .then((user: any)=>{
      this.itemUsernameAux = user.itemUsername;
      this.itemPasswordAux = user.itemPassword;
    })

    if(this.itemPassword === this.itemPasswordAux
      && this.itemUsername === this.itemUsernameAux){
        alert('Bem vindo(a)!');
        this.rota.navigate(['/home']);
      }else{
        alert('Usuario e/ou senha incorretos');
      }


    
  }

  ngOnInit(): void {
  }

}
