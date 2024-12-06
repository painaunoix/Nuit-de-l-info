import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';  // Assurez-vous que c'est le bon composant pour AppComponent
import { LoginComponent } from './components/login/login.component'; // Assurez-vous du bon chemin
import { AppRoutingModule } from './app-routing.module'; // Importez le module de routage

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,  // Assurez-vous d'ajouter le module de routage dans les imports
        LoginComponent,     // Ajoutez LoginComponent dans imports s'il est autonome
    ],
    bootstrap: [AppComponent]  // Bootstrap de l'application avec AppComponent
})

export class AppModule { }