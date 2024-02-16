import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ZoneResponse } from 'src/app/interfaces/responses/zoneResponse.interface';
import { environment } from 'src/environments/environment';
const LMCABLEMAS_URL = environment.LMCABLEMAS_URL;
@Injectable({providedIn: 'root'})
export class ZoneService {
	constructor(
		private http: HttpClient
	) { }
	getZones():Observable<ZoneResponse> {
		return this.http.get<ZoneResponse>(`${LMCABLEMAS_URL}/Zone/get-zones`);
	}
}