import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  morseInput: string = ''; // Le code Morse généré
  translatedText: string = ''; // La traduction en texte clair
  private keyPressStartTime: number = 0; // Temps de début d'une pression sur une touche
  private morseCodeMap: { [key: string]: string } = {
    A: '.-', B: '-...', C: '-.-.', D: '-..', E: '.', F: '..-.',
    G: '--.', H: '....', I: '..', J: '.---', K: '-.-', L: '.-..',
    M: '--', N: '-.', O: '---', P: '.--.', Q: '--.-', R: '.-.',
    S: '...', T: '-', U: '..-', V: '...-', W: '.--', X: '-..-',
    Y: '-.--', Z: '--..', 1: '.----', 2: '..---', 3: '...--',
    4: '....-', 5: '.....', 6: '-....', 7: '--...', 8: '---..',
    9: '----.', 0: '-----', ' ': '/',
  };

  // Fonction appelée lors de l'appui sur une touche
  onKeyDown(event: KeyboardEvent): void {
    if (event.code === 'Space' && this.keyPressStartTime === 0) {
      this.keyPressStartTime = Date.now(); // Enregistre le temps de début
    } else if (event.code === 'Backspace') {
      // Supprimer le dernier caractère Morse
      this.morseInput = this.morseInput.slice(0, -1);
      this.translateMorse(); // Mettre à jour la traduction
    }
  }

  // Fonction appelée lors du relâchement d'une touche
  onKeyUp(event: KeyboardEvent): void {
    if (event.code === 'Space') {
      const pressDuration = Date.now() - this.keyPressStartTime; // Durée de la pression
      this.keyPressStartTime = 0;

      // Déterminer si c'est un point, un trait, ou un espace
      if (pressDuration < 200) {
        this.morseInput += '.'; // Ajoute un point
      } else if (pressDuration < 800) {
        this.morseInput += '-'; // Ajoute un trait
      } else if (pressDuration >= 1000) {
        this.morseInput += ' '; // Ajoute un espace pour une longue pression
      }

      this.translateMorse(); // Traduire automatiquement
    }
  }

  // Fonction pour traduire le Morse en texte lisible
  translateMorse(): void {
    const morseToTextMap = Object.entries(this.morseCodeMap).reduce(
      (acc, [key, value]) => {
        acc[value] = key;
        return acc;
      },
      {} as { [key: string]: string }
    );

    // Décoder chaque lettre séparée par un espace
    this.translatedText = this.morseInput
      .trim()
      .split(' ')
      .map((morseChar) => morseToTextMap[morseChar] || '')
      .join('');
  }
}
