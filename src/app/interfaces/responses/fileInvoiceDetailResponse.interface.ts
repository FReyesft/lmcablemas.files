import { ErrorResponse } from "../ErrorResponse.interface";

export interface FileInvoiceDetailResponse extends ErrorResponse {
	fileInvoiceDetail: FileInvoiceDetail[];
}

export interface FileInvoiceDetail {
	idFileInvoiceDetail: string;
	nuip:                number;
	name:                string;
	address:             string;
	description:         string;
	consecutive:         number;
	prefix:              string;
	isPay:               boolean;
	onlinePay:           OnlinePay[];
	totalInvoice:        number;
}

export interface OnlinePay {
	idOnlinePay:                     string;
	idCompany:                       string;
	idFileInvoiceDetail:             string;
	idTermOnlinePayStatus:           number;
	idSourceOnlinePay:               string;
	reportedDateTime:                string;
	createDateTime:                  string;
	jsonpayLoad:                     string;
	jsonpayLoadHash:                 string;
	pay:                             boolean;
	onlinePayValue:                  number;
	idTermOnlinePayStatusNavigation: IDTermOnlinePayStatusNavigation;
}

export interface IDTermOnlinePayStatusNavigation {
	term: string;
}
