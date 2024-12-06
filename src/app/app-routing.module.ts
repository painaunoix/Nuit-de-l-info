import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'; // Chemin � ajuster

const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	// Ajoutez d'autres routes si nécessaire
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],  // Charge les routes
	exports: [RouterModule]  // Exporte les routes pour qu'elles soient utilis�es ailleurs
})
export class AppRoutingModule { }
