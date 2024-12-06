import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LyrecoComponent } from './components/lyreco/lyreco.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, LyrecoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Nuit-de-l-info';
}