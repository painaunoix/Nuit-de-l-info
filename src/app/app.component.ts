import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {SoundControllerComponent} from './components/sound-controller/sound-controller.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule, SoundControllerComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: RouterModule) {}
}
