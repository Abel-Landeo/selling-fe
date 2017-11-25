import { Component, OnInit } from '@angular/core';
import { VuelosService } from './vuelos.service';

@Component({
	selector: 'app-vuelos',
	templateUrl: './vuelos.component.html',
	styleUrls: ['./vuelos.component.css']
})
export class VuelosComponent implements OnInit {

	clickMessage: string;

	constructor(private vuelosService: VuelosService) { }

	ngOnInit() { }

	findButton(): void{
		this.vuelosService.postData()
		.subscribe(resp => {
			console.log(resp);
		});
	}

}
