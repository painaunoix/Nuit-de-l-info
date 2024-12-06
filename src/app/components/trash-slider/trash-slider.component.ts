import { Component, OnInit } from '@angular/core';
import {NgForOf, NgStyle} from '@angular/common';

interface GameImage {
  src: string;
  x: number;
  y: number;
  speed: number;
}

@Component({
  selector: 'trash-slider',
  imports: [
    NgForOf,
    NgStyle
  ],
  templateUrl: './trash-slider.component.html',
  styleUrls: ['./trash-slider.component.css']
})
export class GameComponent implements OnInit {
  images: GameImage[] = [];
  imageSources: string[] = [
    'image/trash.png',
    'image/can.png',
    'image/straw.png',
    'image/bottle.png'
  ];
  score: number = 0;
  gameInterval: any;

  ngOnInit() {
    this.startGame();
  }

  startGame() {
    this.gameInterval = setInterval(() => {
      this.addImage();
    }, 1000);
    requestAnimationFrame(this.updatePositions.bind(this));
  }

  addImage() {
    const randomIndex = Math.floor(Math.random() * this.imageSources.length);
    const newImage: GameImage = {
      src: this.imageSources[randomIndex],
      x: -50,
      y: Math.random() * 400,
      speed: Math.random() * 1 + 1
    };
    this.images.push(newImage);
  }

  updatePositions() {
    this.images.forEach((image, index) => {
      image.x += image.speed;

      if (image.x > window.innerWidth) {
        this.images.splice(index, 1);
      }
    });

    requestAnimationFrame(this.updatePositions.bind(this));
  }

  removeImage(index: number) {
    this.images.splice(index, 1);
    this.score++;
  }

  ngOnDestroy() {
    clearInterval(this.gameInterval);
  }
}