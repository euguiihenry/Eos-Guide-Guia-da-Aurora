import { Component, OnInit } from '@angular/core';
import { UserRegistration } from 'src/app/global-services/userRegistration.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logged: Boolean = false;

  constructor(private userAuth: UserRegistration) {
    
  }

  ngOnInit(): void {
    this.logged = this.userAuth.isUserAuthenticated();
  }

}
