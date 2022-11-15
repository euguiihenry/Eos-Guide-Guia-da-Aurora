import { Component, OnInit } from '@angular/core';
import { UserRegistration } from '../../global-services/userRegistration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private userAuth: UserRegistration, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.userAuth.saveUserAuth(false);

    this.router.navigate(['/sign-in']);
  }
}
