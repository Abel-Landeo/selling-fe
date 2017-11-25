import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Vuelo } from './vuelo';
import { Response } from './response.model';
import { environment } from '../../environments/environment';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class VuelosService {

	constructor(private http: HttpClient) {}

	postData(postData: any): Observable<Response>{
		return this.http.post<Response>(environment.backendUrl + '/find-flights', postData, httpOptions);
	}

	getCities(): Observable<Response>{
		return this.http.get<Response>(environment.backendUrl + '/all-destination', httpOptions);
	}
}



