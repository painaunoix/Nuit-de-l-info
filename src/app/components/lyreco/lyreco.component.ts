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
  topPosition: string = `calc(50% + ${Math.random() * 10 - 5}%)`;
  leftPosition: string = `calc(50% + ${Math.random() * 10 - 5}%)`;
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
    const randomTop = Math.random() * 80;
    const randomLeft = Math.random() * 80;
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
