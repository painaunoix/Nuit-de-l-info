// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CookieComponent } from './components/CookieGame/cookie/cookie.component';

export const routes: Routes = [
  { path: 'cookie', component: CookieComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
]