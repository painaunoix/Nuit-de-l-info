import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {CookieShopComponent} from '../cookie-shop/cookie-shop.component';
import {CookieGameService} from '../../../service/cookie-game.service';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  imports: [
    NgOptimizedImage,
    CookieShopComponent
  ],
  styleUrl: './cookie.component.css'
})
export class CookieComponent {

  constructor(
    public cookieGameService: CookieGameService) {}

  onClick(): void {
    this.cookieGameService.addScore();
  }
}
