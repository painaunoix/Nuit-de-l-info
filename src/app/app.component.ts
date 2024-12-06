// src/app/app.component.ts
import { Component } from '@angular/core';
import {SoundControllerComponent} from './components/sound-controller/sound-controller.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SeaComponent } from './components/sea/sea.component';
import { QuestComponent } from './components/quest/quest.component'
import { LyrecoComponent } from './components/lyreco/lyreco.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, NavbarComponent, SeaComponent, LyrecoComponent, QuestComponent, MatDialogModule, MatButtonModule, SoundControllerComponent],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: RouterModule) {}
}
