import { Component } from '@angular/core';
import { LyrecoComponent } from '../lyreco/lyreco.component';
import { GameComponent } from '../trash-slider/trash-slider.component';
import { QuestComponent } from '../quest/quest.component';
@Component({
  selector: 'app-sea',
  imports: [GameComponent, LyrecoComponent, QuestComponent],
  templateUrl: './sea.component.html',
  styleUrl: './sea.component.css'
})
export class SeaComponent {
}
