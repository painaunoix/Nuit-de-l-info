import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {CookieShopComponent} from '../cookie-shop/cookie-shop.component';
import {CookieGameService} from '../../../service/cookie-game.service';
import { SoundControllerComponent } from "../../sound-controller/sound-controller.component";

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  imports: [
    NgOptimizedImage,
    CookieShopComponent,
    SoundControllerComponent
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
