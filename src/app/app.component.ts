import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { GameComponent } from './components/trash-slider/trash-slider.component';
import { LyrecoComponent } from './components/lyreco/lyreco.component';
import { SeaComponent } from './components/sea/sea.component';
import { QuestComponent } from './components/quest/quest.component'
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, SeaComponent, LyrecoComponent, QuestComponent, MatDialogModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Nuit-de-l-info';
}