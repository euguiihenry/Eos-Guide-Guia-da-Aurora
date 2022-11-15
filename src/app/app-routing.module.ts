import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { MainComponent } from './home/main/main.component';
import { SignInComponent } from './sign/sign-in/sign-in.component';
import { SignUpComponent } from './sign/sign-up/sign-up.component';
import { MenuComponent } from './settings/menu/menu.component';
import { CinemaComponent } from './settings/cinema/cinema.component';
import { ComidaComponent } from './settings/comida/comida.component';
import { LazerComponent } from './settings/lazer/lazer.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: MainComponent,
  },

  {
    path: 'sign-in',
    component: SignInComponent
  },

  {
    path: 'sign-up',
    component: SignUpComponent
  },

  {
    path:'settings',
    component: MenuComponent,
    canActivate: [AuthGuard]
  },

  {
    path:'settings/cinema',
    component: CinemaComponent,
    canActivate: [AuthGuard]
  },

  {
    path:'settings/comida',
    component: ComidaComponent,
    canActivate: [AuthGuard]
  },

  {
    path:'settings/lazer',
    component: LazerComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
