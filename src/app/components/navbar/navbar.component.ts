import { Component } from '@angular/core';
import { Router, RouterLink, Routes } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { ChangeVueService } from '../../service/change-vue.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private ChangeVueService: ChangeVueService) {}

  onScrollToBottom() {
      this.ChangeVueService.scrollToBottom(2);
  }

}
