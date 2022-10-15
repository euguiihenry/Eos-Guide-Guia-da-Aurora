import { Component, OnInit } from '@angular/core';
import { UserRegistration } from '../../services/userRegistration.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {

  newUserObj = {};
  itemFirstname: string = '';
  itemLastname: string = '';
  itemUsername: string = '';
  itemPassword: string = '';
  itemPasswordConfirm: string = '';

  constructor(private userRegist: UserRegistration, private rota: Router ) { }

  public userData: any [] = [ ];

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

    console.log(this.newUserObj);

    if(this.itemPassword===this.itemPasswordConfirm){
      if(this.itemFirstname && this.itemLastname && this.itemUsername && this.itemPassword){
        await this.userRegist.addUser(this.itemUsername, this.newUserObj);
        alert(this.itemFirstname);
        this.rota.navigate(['/home']);
      }else{
        alert('Não é possível salvar uma tarefa vazia');
      }
    }else {
      alert('As senhas não conferem');
    }
  
  }
/*
  public getUserdata(){
    //this.userRegist.teste();
    alert(this.itemFirstname);
  }*/

}
