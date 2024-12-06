import { Component } from '@angular/core';
import { CookieGameService, Upgrade } from '../../../service/cookie-game.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-cookie-shop',
  imports: [
    NgForOf
  ],
  templateUrl: './cookie-shop.component.html',
  styleUrl: './cookie-shop.component.css'
})
export class CookieShopComponent {
  constructor(public cookieGameService: CookieGameService) {}

  buy(upgrade: Upgrade): void {
    this.cookieGameService.buyUpgrade(upgrade);
  }
}
