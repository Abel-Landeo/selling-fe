import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Vuelo } from './vuelo';
import { Response } from './response.model';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const body = {
  "origin" : "NYC",
  "destination" : "LAX",
  "departureDate" : "2017-12-16",
  "returnDate" : "2017-12-20",
  "oneWay" : "false",
  "codeProvider" : "AM"
};

@Injectable()
export class VuelosService {

	private vuelosUrl = 'http://app-unmsm-travel.cfapps.io/find-flights';
	private citiesUrl = 'http://app-unmsm-travel.cfapps.io/all-destination';

	constructor(private http: HttpClient) {}

	postData(): Observable<Response>{
		return this.http.post<Response>(this.vuelosUrl, body, httpOptions);
	}

	getCities(): Observable<Response>{
		return this.http.get<Response>(this.citiesUrl, httpOptions);
	}
}



