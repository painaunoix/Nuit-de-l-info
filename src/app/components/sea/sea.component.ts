import { Component } from '@angular/core';
import { LyrecoComponent } from '../lyreco/lyreco.component';
import { GameComponent } from '../trash-slider/trash-slider.component';

@Component({
  selector: 'app-sea',
  imports: [GameComponent, LyrecoComponent],
  templateUrl: './sea.component.html',
  styleUrl: './sea.component.css'
})
export class SeaComponent {
}
