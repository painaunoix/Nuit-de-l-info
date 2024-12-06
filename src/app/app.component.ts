import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SoundControllerComponent } from "./components/sound-controller/sound-controller.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, SoundControllerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Nuit-de-l-info';
}
