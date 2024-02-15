import { IDCashRegisterLogNavigation } from "./cashregister.interface";
import { IDPersonNavigation, Person } from "./person.interface";
import { IDTermNavigation } from "./terms.interface";
import { IDContractNavigation } from './contract.interface';
import { VoucherDetail, VoucherPaymentMethod } from "./voucher.interface";
import { ErrorResponse } from "./ErrorResponse.interface";
import { Paginator } from "./paginator.interface";

export interface IDEmployeeENavigation {
	idCompany?: string;
	idEmployee?: number;
	idPerson?: number;
	beginDate?: Date;
	idTermJobPosition?: number;
	endDate?: Date;
	idPersonNavigation?: IDPersonNavigation;
	idTermJobPositionNavigation?: IDTermNavigation;
}

export interface IDEmployeeLastChangeNavigation {
	idCompany?: string;
	idEmployee?: number;
	idPerson?: number;
	beginDate?: Date;
	idTermJobPosition?: number;
	endDate?: Date;
	idPersonNavigation?: IDPersonNavigation;
	idTermJobPositionNavigation?: IDTermNavigation;
}

export interface Employee {
	idVoucher: number;
	idContract: number;
	idCashRegisterLog: number;
	idCompany: string;
	date: Date;
	idCashRegisterLogNavigation: IDCashRegisterLogNavigation;
	idContractNavigation: IDContractNavigation;
	idBranchCompany: number;
	consecutive: number;
	prefix: string;
	idTermDocumentType: number;
	idTermDocumentTypeNavigation: IDTermNavigation;
	voucherDetail: VoucherDetail[];
	voucherPaymentMethods: VoucherPaymentMethod[];
	fullname?: string;
	nuip?: number;
	phone?: number;
	address?: string;
	entryDate?: string;
	jobPosition?: string;
	state?: string;
	idPersonNavigation?: Person;
}

export interface EmployeeResponse extends ErrorResponse {
	employes?: Employee[];
	paginator?: Paginator;
	beginDate?: Date;
	endDate?: Date;
	idCompany?: string;
	idCompanyNavigation?: string;
	idEmployee?: number;
	idPerson?: number;
	idPersonNavigation?: Person;
	idTermJobPosition?: number;
	idTermJobPositionNavigation?: null;
}