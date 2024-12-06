// src/app/app.component.ts
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SeaComponent } from './components/sea/sea.component';
import { QuestComponent } from './components/quest/quest.component'
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, SeaComponent, LyrecoComponent, QuestComponent, MatDialogModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
