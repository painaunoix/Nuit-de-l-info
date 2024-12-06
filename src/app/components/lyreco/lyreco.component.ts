import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common'

@Component({
  selector: 'app-lyreco',
  imports: [
    NgIf
  ],
  standalone: true,
  templateUrl: './lyreco.component.html',
  styleUrls: ['./lyreco.component.css']
})
export class LyrecoComponent implements OnInit {
  topPosition: string = '50%';
  leftPosition: string = '50%';
  isAnimating: boolean = false;
  showGif: boolean = false;
  isClicked: boolean = false;

  ngOnInit(): void {
    this.startRandomMovement()
  }

  startRandomMovement(): void {
    setInterval(() => {
      this.moveImageToRandomPosition();
    }, 7000);
  }

  moveImageToRandomPosition(): void {
    const randomTop = Math.random() * 100;
    const randomLeft = Math.random() * 100;
    this.topPosition = `${randomTop}%`;
    this.leftPosition = `${randomLeft}%`;
  }

  onImageClick(): void {
    this.moveImageToRandomPosition();
    console.log('Image cliquée !');

    this.showGif = true;

    this.isClicked = true;
    setTimeout(() => {
      this.showGif = false;
      this.isClicked = false;
    }, 5000);
  }
}
