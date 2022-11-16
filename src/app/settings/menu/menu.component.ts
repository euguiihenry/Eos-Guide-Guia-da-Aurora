import { Component, OnInit } from '@angular/core';
import { UserRegistration } from '../../global-services/userRegistration.service';
import { Router } from '@angular/router';
import { User } from '../../sign/models/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private userAuth: UserRegistration, private router: Router, private formBuilder: FormBuilder) { 
    this.menuForm = this.formBuilder.group({
      cep: ['', Validators.compose([
        Validators.required,
        Validators.minLength(9)
      ])]
  
    })
   }

   public menuForm!: FormGroup;
   public user: User = new User();

  

  ngOnInit(): void {
  }

  logout() {
    this.userAuth.saveUserAuth(false);

    this.router.navigate(['/home']);
  }

  saveCEP(){

    this.router.navigate(['/home']);

  }
}
