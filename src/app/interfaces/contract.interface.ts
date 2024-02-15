import { Address, IDAddressAtionNavigation } from "./address.interface";
import { IDPlanServiceNavigation } from "./planservice.interface";
import { IDCompanyNavigation, Company } from './company.interface';
import { IDTermNavigation, Navigation, TermContractStatus } from "./terms.interface";
import { ErrorResponse } from "./ErrorResponse.interface";
import { IDPersonNavigation, Person } from './person.interface';
import { PlanService } from './planservice.interface';
import { Voucher } from "./voucher.interface";
import { Invoice } from "./invoices.interface";
import { IDEmployeeENavigation } from "./employee.interface";

export interface Contract {
	idContract?: number;
	idCompany?: string;
	idAddressFacturation?: number;
	idAddressInstalation?: number;
	idPlanService?: number;
	idTermContractStatus?: number;
	idPerson?: number;
	beginDate?: Date;
	endDate?: Date;
	createDate?: Date;
	idBranchCompany?: number;
	consecutive?: number;
	prefix?: string;
	idTermTicketAction?: number;
	lastChangeDateTime?: Date;
	idEmployeeLastChange?: number;
	lastExecutionDateTime?: Date;
	idAddressInstalationNavigation?: IDAddressAtionNavigation;
	idAddressFacturationNavigation?: IDAddressAtionNavigation;
	idPlanServiceNavigation?: IDPlanServiceNavigation;
	idCompanyNavigation?: IDCompanyNavigation;
	idTermContractStatusNavigation?: Navigation;
	debt?: number;
}

export interface ResponseContract extends ErrorResponse {
	contract?: Contract2;
}
export interface Contract2 {
	beginDate?: Date;
	createDate?: Date;
	endDate?: Date;
	idAddressFacturation?: number;
	idAddressFacturationNavigation?: Address;
	idAddressInstalation?: number;
	idAddressInstalationNavigation?: Address;
	idCompany?: string;
	idCompanyNavigation?: Company;
	idContract?: number;
	idPerson?: number;
	idPersonNavigation?: Person;
	idPlanService?: number;
	idPlanServiceNavigation?: PlanService;
	idTermReason?: number;
	debt?: number;
	idTermContractStatusNavigation?: TermContractStatus,
	invoice?: Invoice[];
	voucher?: Voucher[];
	contractCustomField?: ContractCustomField[];
	contractLog?: ContractLog[];
	consecutive?: number;
	prefix?: string;
	idTermTicketAction?: number;
	idTermTicketActionNavigation?: IDTermNavigation;
}

export interface ContractCustomField {
	idContract?: number;
	idCompanyEntityCustomField?: string;
	customFieldName?: string;
	genericValue?: string;
}

export interface ContractLog {
	idNote?: string;
	idtermEntity?: number;
	idCompany?: string;
	idRowEntity?: string;
	companyEntityHash?: string;
	noteContent?: string;
	creationDateTime?: Date;
	idUserAppCreatedNote?: number;
	userNameUserAppCreatedNote?: string;
	personNameUserAppCreatedNote?: string;
	deletedRow?: boolean;
	idUserAppDeletedNote?: number;
	deletionDateTime?: Date;
	userNameUserAppDeletedNote?: string;
	personNameUserAppDeletedNote?: string;
}

export interface IDContractNavigation {
	idContract?: number;
	idCompany?: string;
	idAddressFacturation?: number;
	idAddressInstalation?: number;
	idPlanService?: number;
	idTermContractStatus?: number;
	idPerson?: number;
	beginDate?: Date;
	endDate?: Date;
	createDate?: Date;
	idBranchCompany?: number;
	consecutive?: number;
	prefix?: string;
	idTermTicketAction?: number;
	lastChangeDateTime?: Date;
	idEmployeeLastChange?: number;
	lastExecutionDateTime?: Date;
	debt?: number;
	idPersonNavigation?: IDPersonNavigation;
	idAddressInstalationNavigation?: IDAddressAtionNavigation;
	idAddressFacturationNavigation?: IDAddressAtionNavigation;
	idPlanServiceNavigation?: IDPlanServiceNavigation;
	idTermContractStatusNavigation?: IDTermNavigation;
	idTermTicketActionNavigation?: IDTermNavigation;
	idCompanyNavigation?: IDCompanyNavigation;
	idEmployeeLastChangeNavigation?: IDEmployeeENavigation;
	contractCustomField?: ContractCustomField[];
	contractLog?: ContractLog[];
}

export interface idContractNavigation {
	debt?: number;
	idPersonNavigation?: null;
	idAddressInstalationNavigation?: null;
	idAddressFacturationNavigation?: null;
	idPlanServiceNavigation?: null;
	idTermContractStatusNavigation?: null;
	idCompanyNavigation?: null;
	idContract?: number;
	idCompany?: string;
	idAddressFacturation?: number;
	idAddressInstalation?: number;
	idPlanService?: number;
	idTermContractStatus?: number;
	idPerson?: number;
	beginDate?: string;
	endDate?: string;
	createDate?: string;
	idBranchCompany?: number
	consecutive?: number;
	prefix?: string;
}