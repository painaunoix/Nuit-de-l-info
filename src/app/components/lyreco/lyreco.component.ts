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
  topPosition: string = '50%';  // Position verticale initiale
  leftPosition: string = '50%';  // Position horizontale initiale
  isAnimating: boolean = false;  // Gère l'animation
  showGif: boolean = false;  // Contrôle l'affichage du GIF
  isClicked: boolean = false;  // Gère l'affichage du message après clic

  ngOnInit(): void {
    this.startRandomMovement(); // Lancement du mouvement aléatoire
  }

  startRandomMovement(): void {
    setInterval(() => {
      this.moveImageToRandomPosition();
    }, 10000); // Déplacement toutes les 10 secondes
  }

  moveImageToRandomPosition(): void {
    const randomTop = Math.random() * 80;
    const randomLeft = Math.random() * 80;
    this.topPosition = `${randomTop}%`;
    this.leftPosition = `${randomLeft}%`;
  }

  onImageClick(): void {
    console.log('Image cliquée !');

    // Affiche le GIF
    this.showGif = true;

    // Affiche le message
    this.isClicked = true;

    // Masque le GIF et le message après 3 secondes
    setTimeout(() => {
      this.showGif = false;  // Masque le GIF
      this.isClicked = false;  // Masque le message
    }, 5000); // Durée d'affichage du GIF et du message
  }
}
