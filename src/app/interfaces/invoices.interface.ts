import { ErrorResponse } from "./ErrorResponse.interface";
import { CompanyDataToVoucherPrint } from "./company.interface";
import { IDContractNavigation } from "./contract.interface";
import { IDItemNavigation } from "./item.interface";
import { Paginator } from "./paginator.interface";

export interface ResponseInvoiceContract extends ErrorResponse {
	invoices?: Invoice[];
	paginator?: Paginator;
}

export interface InvoiceDetailResponse extends ErrorResponse {
	invoiceDetails: InvoiceDetail[];
	paginator: Paginator;
}

export interface InvoiceIDResponse extends ErrorResponse {
	invoice: Invoice;
}

export interface Invoice {
	idInvoice?: number;
	idCompany?: string;
	idBranchCompany?: number;
	idContract?: number;
	consecutive?: number;
	prefix?: string;
	createDate?: Date;
	finishDate?: Date;
	totalPay?: number;
	totalInvoice?: number;
	pay?: boolean;
	idContractNavigation?: IDContractNavigation;
	invoiceDetail?: InvoiceDetail[];
}

export interface IDInvoiceDetailNavigation {
	idInvoiceDetail?: number;
	idItem?: number;
	idInvoice?: number;
	descripction?: string;
	saleCost?: number;
	buyCost?: number;
	quantity?: number;
	totalInvoiceDetail?: number;
	idInvoiceNavigation?: IDInvoiceNavigation;
	idItemNavigation?: IDItemNavigation;
	totalPay?: number;
	pay?: boolean;
}

export interface IDInvoiceNavigation {
	idInvoice?: number;
	idCompany?: string;
	idBranchCompany?: number;
	idContract?: number;
	consecutive?: number;
	prefix?: string;
	createDate?: Date;
	finishDate?: Date;
	totalPay?: number;
	totalInvoice?: number;
	pay?: boolean;
}

export interface InvoiceDetail {
	idInvoiceDetail?: number;
	idItem?: number;
	idInvoice?: number;
	descripction?: string;
	saleCost?: number;
	buyCost?: number;
	quantity?: number;
	totalInvoiceDetail?: number;
	idItemNavigation?: IDItemNavigation;
	totalPay?: number;
	pay?: boolean;
	idInvoiceNavigation?: InvoiceDetailNavigation;
}

export interface ResponseInvoiceUnitary extends ErrorResponse {
	invoice: Invoice;
}

export interface RequestInvoiceContract {
	idCompany?: string;
	page?: number;
	size?: number;
	islist?: boolean;
	withJson?: boolean;
	withImage?: boolean;
	idContract?: number;
	consecutive?: number;
	prefix?: string;
	createDate?: Date;
	finishDate?: Date;
	pay?: boolean;
}

export interface Invoices extends ErrorResponse {
	invoices?: Invoice[];
	companyDataToInvoicePrint?: CompanyDataToVoucherPrint;
	paginator?: Paginator;
}

export interface RequestLinkPay {
	idCompany?: string;
	idContract?: number;
	url_client_redirect?: string;
	payAll?: boolean;
	invoiceDetailes?: number[];
}

export interface ResponseLinkPay extends ErrorResponse {
	paymentLink: string;
}

export interface InvoiceDetailNavigation {
	idInvoice: number;
	idCompany: number;
	idContract: number;
	consecutive: number;
	prefix: string;
	createDate: Date;
	finishDate: Date;
	totalPay: number;
	totalInvoice: number;
	pay: boolean,
	idContractNavigation?: string;
}

export interface FilterInvoices {
	idCompany?: string;
	page?: number;
	size?: number;
	islist?: boolean;
	withJson?: boolean;
	withImage?: boolean;
	date?: string;
	idBranchCompany?: number;
	idCity?: number;
	idNeighborhood?: number;
}

export interface InvoiceDetailRequest {
	idCompany: string;
	page: number;
	size: number;
	islist: boolean;
	idInvoiceDetail?: number;
	idItem?: number;
	idInvoice?: number;
	descripction?: string;
	idContract?: number;
	saleCost?: number;
	buyCost?: number;
	quantity?: number;
	totalInvoiceDetail?: number;
	totalPay?: number;
	pay?: boolean;
	saleCosto?: number;
	genericService?: {
		idTermGenericService: number;
	}
}

export interface RequestStatusPay {
	idCompany: string;
	idOnlinePay: string;
	jsonpayLoadHash: string;
}

export interface ResponseStatusPay extends ErrorResponse {
	idOnlinePay: string;
	idCompany: string;
	idContract: number;
	idThirdPartyApplication: number;
	idTermOnlinePayStatus: number;
	reportedDateTime: Date;
	prefix: string;
	consecutive: number;
	createDateTime: Date;
	invoiceDetailes: InvoiceDetaile[];
}

export interface InvoiceDetaile {
	idInvoiceDetail: number;
	idItem: number;
	idInvoice: number;
	descripction: string;
	saleCost: number;
	buyCost: number;
	quantity: number;
	totalInvoiceDetail: number;
	totalPay: number;
	pay: boolean;
}