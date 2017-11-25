import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { VuelosService } from './vuelos.service';
import { City } from './city.model';
import { Response } from './response.model';

@Component({
	selector: 'app-vuelos',
	templateUrl: './vuelos.component.html',
	styleUrls: ['./vuelos.component.css']
})
export class VuelosComponent implements OnInit {

	destinyCity: City;
	originCity: City;
	departureDate: string;
	returnDate: string;
	cities: City[];
	resp: Response;
	oneWay: boolean;
	codeProvider: string;
	msg: string;
	
	constructor(private vuelosService: VuelosService) { }

	ngOnInit() { 
		this.resp = null;
		this.vuelosService.getCities()
		.subscribe(
		resp => {
			this.cities = resp.lista as City[];
			this.initForm();
		},
		(err: HttpErrorResponse) => {
			if (err.error instanceof Error) {
				// A client-side or network error occurred. Handle it accordingly.
				console.log('An error occurred:', err.error.message);
				this.msg = 'Something just went wrong, try refreshing the page please. Peace and Love';
			} else {
				// The backend returned an unsuccessful response code.
				// The response body may contain clues as to what went wrong,
				console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
				this.msg = 'Apparently the service is not available for now, we will solve it soon. Come back later :)';
			}
		});
	}

	findButton(): void{
		const payload = {
			"origin" : this.originCity.code,
			"destination": this.destinyCity.code,
			"departureDate" : this.departureDate,
			"returnDate" : this.returnDate,
			"oneWay" : this.oneWay?'true':'false',
			"codeProvider" : this.codeProvider
		};
		this.vuelosService.postData(payload)
		.subscribe(resp => {
			this.resp = resp;
		});
	}

	initForm():void {
		for(let city of this.cities){
			if (city.code === 'NYC') this.originCity = city;
			if (city.code === 'LAX') this.destinyCity = city;
		}
		this.departureDate = '2017-12-16';
		this.returnDate = '2017-12-20';
		this.oneWay = false;
		this.codeProvider = 'AM';
		this.msg = 'Search is ready';
	}

}
