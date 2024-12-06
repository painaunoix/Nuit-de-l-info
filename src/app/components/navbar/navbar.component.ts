import { Component } from '@angular/core';
import { Router, RouterLink, Routes } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { ChangeVueService } from '../../service/change-vue.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    constructor(private ChangeVueService: ChangeVueService,
                private router: RouterModule    ) { }

  onScrollToBottom() {
      this.ChangeVueService.scrollToBottom(2);
  }

}
