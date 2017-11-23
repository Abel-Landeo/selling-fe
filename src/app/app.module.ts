import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AutosComponent } from './autos/autos.component';
import { HotelesComponent } from './hoteles/hoteles.component';

const appRoutes: Routes = [
	{ path: 'inicio', component: AppComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'autos', component: AutosComponent },
	{ path: 'hoteles', component: HotelesComponent },
	{ path: '',   redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent,
		AutosComponent,
		HotelesComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(appRoutes)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
