import { Component, OnInit } from '@angular/core';
import { UserRegistration } from '../../global-services/userRegistration.service'
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

  constructor(private userService: UserRegistration) { }

  loginUser() {
    this.userService.login(this.itemPassword, this.itemUsername);
  }

  ngOnInit(): void {
  }

}
