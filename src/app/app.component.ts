import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { GameComponent } from './components/trash-slider/trash-slider.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, GameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Nuit-de-l-info';
}
