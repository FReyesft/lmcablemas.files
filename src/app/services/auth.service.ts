import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UserAppRequest, UserAppEmployeeResponse } from '../interfaces/userAppRequest.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {
	private _authUrl = environment.AUTH;
	constructor(
		private http: HttpClient
	) { }

	authenticationEmployee(userApp: UserAppRequest): Observable<UserAppEmployeeResponse>{
    return this.http.post<UserAppEmployeeResponse>(`${ this._authUrl}/auth`, userApp);
  }

}