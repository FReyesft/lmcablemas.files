import { ErrorResponse } from "../ErrorResponse.interface";

export interface FileListResponse extends ErrorResponse {
	fileInvoices: FileInvoice[];
	paginator:    Paginator;
}

export interface FileInvoice {
	idFileInvoice:             number;
	fileName:                  string;
	dateInvoice:               string;
	idZone:                    number;
	createdDateTime:           string;
	invoiceFile:               null;
	extension:                 string;
	isEnable:                  boolean;
	hashPersonEmployee:        null;
	zoneName:                  string;
	fileInvoiceDetail:         null;
	quantityFileInvoicePay:    number;
	totalFileInvoicePay:       number;
	quantityFileInvoiceUnpaid: number;
	totalFileInvoiceUnpaid:    number;
	quantityFileInvoice:       number;
	totalFileInvoice:          number;
}

export interface Paginator {
	totalItems:  number;
	currentPage: number;
	pageSize:    number;
	totalPages:  number;
	startPages:  number;
	endPages:    number;
}
