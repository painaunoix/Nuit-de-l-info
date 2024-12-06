// src/app/components/signup/signup.component.ts
import { Component } from '@angular/core';
import { SupabaseService } from '../../supabase_signup.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  email = '';
  password = '';
  successMessage = '';
  errorMessage = '';

  constructor(private supabaseService: SupabaseService) {}

  async signup() {
    this.successMessage = '';
    this.errorMessage = '';

    try {
      const user = await this.supabaseService.signUp(this.email, this.password);
      this.successMessage = `Signup successful! Welcome, ${user.email}`;
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }
}