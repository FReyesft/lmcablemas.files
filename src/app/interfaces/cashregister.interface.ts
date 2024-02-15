import { IDOfficeNavigation } from "./company.interface";
import { IDEmployeeENavigation, EmployeeResponse } from './employee.interface';

export interface IDCashRegisterLogNavigation {
	idCashRegisterLog?: number;
	idEmployee?: number;
	idCashRegister?: number;
	initBalance?: number;
	leftBalance?: number;
	dateOpen?: Date;
	dateClose?: Date;
	cashClose?: number;
	idCashRegisterNavigation?: IDCashRegisterNavigation;
	idEmployeeNavigation?: IDEmployeeENavigation;
}

export interface IDCashRegisterNavigation {
	idCashRegister?: number;
	idOffice?: number;
	addressMac?: string;
	hostName?: string;
	token?: string;
	enable?: boolean;
	idOfficeNavigation?: IDOfficeNavigation;
}

export interface CashRegisterLogResponse {
	cashClose: string;
	dateClose: string;
	dateOpen: Date;
	idCashRegister: number;
	idCashRegisterLog: number;
	idCashRegisterNavigation: string;
	idEmployee: number;
	idEmployeeNavigation: EmployeeResponse;
	initBalance: number;
	leftBalance: null
}