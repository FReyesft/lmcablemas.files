import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateFileinvoiceRequest } from 'src/app/interfaces/request/createFileInvoiceRequest.interface';
import { Observable } from 'rxjs';
import { Error } from 'src/app/interfaces/ErrorResponse.interface';
import { environment } from 'src/environments/environment';
import { FileListResponse } from 'src/app/interfaces/responses/fileListResponse.interface';
import { PaginatorFile } from 'src/app/interfaces/request/fileListRequest.interface';
import { FileInvoiceDetailResponse } from 'src/app/interfaces/responses/fileInvoiceDetailResponse.interface';
const LMCABLEMAS_URL = environment.LMCABLEMAS_URL
@Injectable({providedIn: 'root'})
export class FileService {
	constructor(
		private http: HttpClient
	) { }
	createFileInvoice(request: CreateFileinvoiceRequest):Observable<Error>{
		return this.http.post<Error>(`${LMCABLEMAS_URL}/FileInvoice/add-file-invoice`, request)
	}

	getListFiles(paginatorFile: PaginatorFile):Observable<FileListResponse>{
		return this.http.post<FileListResponse>(`${LMCABLEMAS_URL}/FileInvoice/get-list-file-invoice`, paginatorFile)
	}

	getFileDetails(id: string):Observable<FileInvoiceDetailResponse>{
		return this.http.post<FileInvoiceDetailResponse>(`${LMCABLEMAS_URL}/FileInvoice/get-file-invoice-details/${id}`, {})
	}
}