import { ErrorResponse } from "./ErrorResponse.interface";

export interface IDOfficeNavigation {
    idOffice?:                  number;
    idBranchCompany?:           number;
    officeName?:                string;
    idBranchCompanyNavigation?: IDBranchCompanyNavigation;
}

export interface IDBranchCompanyNavigation {
    idBranchCompany?:     number;
    idCompany?:           string;
    branchCompanyName?:   string;
    idCompanyNavigation?: IDCompanyNavigation;
}

export interface IDCompanyNavigation {
    idCompany?:    string;
    nit?:          number;
    rutic?:        number;
    businessName?: string;
    idCity?:       number;
    enable?:       boolean;
    startDate?:    Date;
    endDate?:      Date;
    birthday?:     Date;
    iconCompany?:    string;
    jsonParameters?: string;
}

export interface Company {
    idCompany  ?: string;
    nit         ?: number;
    rutic       ?: number;
    businessName?: string;
    idCity      ?: number;
    enable     ?: boolean;
    startDate  ?: Date;
    endDate    ?: Date;
    birthday    ?: Date;
    iconCompany?: string;
}

export interface CompanyResponse {
    idCompany: string;
    idCompanyNavigation: Company;
    idEmployee: number;
    idPerson: number;
    idTermJobPosition: number;
    idTermJobPositionNavigation: string;
    avatar?: string;
}

export interface ResponseCompany {
    idCompanyNavigation: IDCompanyNavigation;
}

export interface ResponseBranchCompany extends ErrorResponse{
    branchCompanies: BranchCompany[];
}

export interface BranchCompany {
    idBranchCompany:     number;
    idCompany:           string;
    branchCompanyName:   string;
    idCompanyNavigation: IDCompanyNavigation;
}


export interface ResponseOffices extends ErrorResponse {
    offices: Office[];
}


export interface Office {
    idOffice:                  number;
    idBranchCompany:           number;
    officeName:                string;
    idBranchCompanyNavigation: null;
}

export interface CompanyDataToVoucherPrint {
    companyAddress: string;
    companyPhones:  string;
}