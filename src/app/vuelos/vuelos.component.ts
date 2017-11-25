import { Component, OnInit } from '@angular/core';
import { VuelosService } from './vuelos.service';
import { City } from './city.model';

@Component({
	selector: 'app-vuelos',
	templateUrl: './vuelos.component.html',
	styleUrls: ['./vuelos.component.css']
})
export class VuelosComponent implements OnInit {

	selectedCity: City;
	cities: City[];

	constructor(private vuelosService: VuelosService) { }

	ngOnInit() { 
		this.vuelosService.getCities()
		.subscribe(resp => {
			this.cities = resp.lista as City[];
		});
	}

	findButton(): void{
		this.vuelosService.postData()
		.subscribe(resp => {
			console.log(resp);
		});
	}

}
