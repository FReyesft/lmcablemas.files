import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateFileinvoiceRequest } from 'src/app/interfaces/request/createFileInvoiceRequest.interface';
import { Observable } from 'rxjs';
import { Error } from 'src/app/interfaces/ErrorResponse.interface';
import { environment } from 'src/environments/environment';
const LMCABLEMAS_URL = environment.LMCABLEMAS_URL
@Injectable({providedIn: 'root'})
export class FileService {
	constructor(
		private http: HttpClient
	) { }
	createFileInvoice(request: CreateFileinvoiceRequest):Observable<Error>{
		return this.http.post<Error>(`${LMCABLEMAS_URL}/FileInvoice/add-file-invoice`, request)
	}
}