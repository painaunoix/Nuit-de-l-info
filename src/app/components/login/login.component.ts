// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { SupabaseService } from '../../supabase.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private supabaseService: SupabaseService) {}

  async login() {
    try {
      const user = await this.supabaseService.signIn(this.email, this.password);
      console.log('User logged in:', user);
    } catch (error: any) {
      console.error('Login error:', error.message);
    }
  }
}