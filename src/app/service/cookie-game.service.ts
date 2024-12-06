import { Injectable } from '@angular/core';

export interface Upgrade {
  name: string;
  cost: number;
  multiplier: number;
  autoClick: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class CookieGameService {

  public score: number = 0;
  public multiplier: number = 1;
  public autoClickPower: number = 0;

  public volume: number = 0;

  public upgrades: Upgrade[] = [
    { name: 'Achat de clique', cost: 10, multiplier: 2, autoClick: false},
    { name: 'Clique automatique', cost: 50, multiplier: 1, autoClick: true},
  ];

  constructor() {
    setInterval(() => {
      if (this.autoClickPower >= 1) {
        this.addScore();
      }
    }, 1000);
    setInterval(() => {
      this.score = Math.floor(this.volume / 2);
    }, 5000);
  }

  addScore(): void {
    console.log('score', this.score);
    console.log('autoCLickPower', this.autoClickPower);
    console.log('multiplier', this.multiplier);
    if (this.autoClickPower) {
      this.score += this.multiplier * this.autoClickPower;
    } else {
      this.score += this.multiplier;
    }
  }

  buyUpgrade(upgrade: Upgrade): void {
    if (this.score >= upgrade.cost) {
      this.score -= upgrade.cost;
      upgrade.cost = Math.floor(upgrade.cost * 10 / 2);
      if (upgrade.name == 'Clique automatique') {
        this.autoClickPower += upgrade.multiplier;
      } else if (upgrade.name == 'Achat de clique') {
        this.doubleClicks();
      }
    }
  }

  doubleClicks(): void {
    this.multiplier += 1;
  }
}
