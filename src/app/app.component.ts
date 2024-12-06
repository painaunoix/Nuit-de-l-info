// src/app/app.component.ts
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SeaComponent } from './components/sea/sea.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, NavbarComponent, SeaComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
