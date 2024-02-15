import { ErrorResponse } from "./ErrorResponse.interface";
import { CashRegisterLogResponse, IDCashRegisterLogNavigation } from "./cashregister.interface";
import {  CompanyDataToVoucherPrint } from "./company.interface";
import { idContractNavigation, IDContractNavigation } from './contract.interface';
import { IDTermNavigation, Term } from './terms.interface';
import { Employee } from './employee.interface';
import { IDInvoiceDetailNavigation } from "./invoices.interface";
import { Paginator } from "./paginator.interface";

export interface ResponseVoucherContract extends ErrorResponse {
	paginator?: Paginator;
	vouchers?: Voucher[];
}

export interface RequestVoucherContract {
	idCompany?: string;
	page?: number;
	size?: number;
	islist?: boolean;
	withJson?: boolean;
	withImage?: boolean;
	idContract?: number;
	idCashRegisterLog?: number;
	idBranchCompany?: number;
	consecutive?: number;
	prefix?: string;
	date?: Date;
}

export interface Voucher {
	idVoucher?: number;
	idContract?: number;
	idCashRegisterLog?: number;
	idCompany?: string;
	date?: Date;
	idCashRegisterLogNavigation?: IDCashRegisterLogNavigation;
	idContractNavigation?: IDContractNavigation;
	idBranchCompany?: number;
	consecutive?: number;
	prefix?: string;
	idTermDocumentType?: number;
	idTermDocumentTypeNavigation?: IDTermNavigation;
	voucherDetail?: VoucherDetail[];
	voucherPaymentMethods?: VoucherPaymentMethod[];
}

export interface VoucherDetail {
	idVoucherDetail?: number;
	idInvoiceDetail?: number;
	idVoucher?: number;
	payValue?: number;
	idInvoiceDetailNavigation?: IDInvoiceDetailNavigation;
}

export interface VoucherPaymentMethod {
	idVoucher?: number;
	idTermTypePaymentMethod?: number;
	idTermTypeCard?: number;
	idTermBank?: number;
	idTermFranchise?: number;
	cus?: string;
	payValue?: number;
	payChange?: number;
	idTermBankNavigation?: IDTermNavigation;
	idTermFranchiseNavigation?: IDTermNavigation;
	idTermTypeCardNavigation?: IDTermNavigation;
	idTermTypePaymentMethodNavigation?: IDTermNavigation;
}

export interface ResponseVoucherUnitary extends ErrorResponse {
	companyDataToVoucherPrint: CompanyDataToVoucherPrint;
	employee: Employee;
}

export interface VoucherElement {
	idVoucher: number;
	idContract: number;
	idCashRegisterLog: number;
	idCompany: string;
	date: Date;
	idCashRegisterLogNavigation: IDCashRegisterLogNavigation;
	idContractNavigation: IDContractNavigation;
	voucherDetail: VoucherDetail[];
}

export interface VoucherResponse extends ErrorResponse {
	employee?: voucher;
	companyDataToVoucherPrint?: CompanyDataToVoucherPrint;
}

export interface voucher {
	idVoucher: number;
	idContract: number;
	idContractNavigation: idContractNavigation;
	idCompany: number;
	date: Date;
	prefix?: string;
	consecutive?: number;
	voucherDetail?: VoucherDetail[],
	idCashRegisterLog: number;
	idCashRegisterLogNavigation: CashRegisterLogResponse;
	voucherPaymentMethods?: PaymentMethodsResponse[];
}

export interface PaymentMethodsResponse {
	idVoucher: number;
	idTermTypePaymentMethod: number;
	idTermTypeCard: number;
	idTermBank: number;
	idTermFranchise: number;
	cus: number;
	payValue: number;
	payChange: number;
	idTermBankNavigation: Term;
	idTermFranchiseNavigation: Term;
	idTermTypePaymentMethodNavigation: Term;
}

export interface ListVoucherResponse extends ErrorResponse {
	paginator?: Paginator;
	vouchers?: Voucher2[];
}

export interface Voucher2 extends ErrorResponse {
	paginator: Paginator;
	vouchers: VoucherElement[];
}

export interface Filtervoucher {
	idCompany?: string;
	page?: number;
	size?: number;
	islist: boolean;
	withJson?: boolean;
	withImage?: boolean;
	idContract: string;
	idCashRegisterLog?: number;
	date?: Date;
}

export interface FilterVoucher {
	idCompany: string;
	page: number;
	size: number;
	idContract: number;
	idEmploye: number;
	date: Date;
}