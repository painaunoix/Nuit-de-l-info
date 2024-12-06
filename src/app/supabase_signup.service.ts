// src/app/services/supabase.service.ts
import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      'https://hykspxdjdxukfgvrfdvd.supabase.co', // Replace with your Supabase project URL
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5a3NweGRqZHh1a2ZndnJmZHZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM0Mzc4MzgsImV4cCI6MjA0OTAxMzgzOH0.fN3G-aT8XWXCwoMORFuecR_a0UbjTiajMvoZFjSj1GM' // Replace with your Supabase anon key
    );
  }

  async signUp(email: string, password: string): Promise<any> {
    const { data, error } = await this.supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      throw error;
    }
    return data.user;
  }
}