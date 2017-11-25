import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AutosComponent } from './autos/autos.component';
import { HotelesComponent } from './hoteles/hoteles.component';
import { VuelosComponent } from './vuelos/vuelos.component';

import { VuelosService } from './vuelos/vuelos.service';

const appRoutes: Routes = [
	{ path: 'inicio', component: AppComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'vuelos', component: VuelosComponent },
	{ path: 'autos', component: AutosComponent },
	{ path: 'hoteles', component: HotelesComponent },
	{ path: '',   redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent,
		AutosComponent,
		HotelesComponent,
		VuelosComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(appRoutes),
		FormsModule,
		HttpClientModule

	],
	providers: [VuelosService],
	bootstrap: [AppComponent]
})
export class AppModule { }
