import { Component, OnInit } from '@angular/core';
import { UserRegistration } from '../../services/userRegistration.service'
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})


export class SignInComponent implements OnInit {

  itemUsername: string = '';
  itemPassword: string = '';

  constructor(private userService: UserRegistration, private rota: Router) { }

  public user: User = new User();


  loginUser() {
    
    for (let id: number = 0; id < this.userService.contUser(); id++) {

      this.userService.getUser(id).subscribe((user: User) => {
        this.user = user;

        if (this.itemPassword === this.user.password
          && this.itemUsername === this.user.username) {
          alert('Bem vindo(a)! ' + this.user.firstname + ' ' + this.user.lastname);
          this.rota.navigate(['/home']);
        }
      });
    }

  }

  ngOnInit(): void {
  }

}
