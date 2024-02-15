import { ErrorResponse } from "./ErrorResponse.interface";

export interface PersonFacilitiesResponse extends ErrorResponse{
	listFacilityUnitDetailPerson: ListFacilityUnitDetailPerson[];
	paginator:                    Paginator;
}

export interface ListFacilityUnitDetailPerson {
	facilityUnitDetail: FacilityUnitDetail;
	persons:            Person[];
}

export interface FacilityUnitDetail {
	idFacilityUnit:           number;
	nomenclature:             string;
	idFacilityUnitNavigation: IDFacilityUnitNavigation;
}

export interface IDFacilityUnitNavigation {
	idFacilityUnit:                   number;
	idTermTypeFacilityUnit:           number;
	idFacility:                       string;
	facilityNomenclature:             string;
	idTermTypeFacilityUnitNavigation: IDTermTypeFacilityUnitNavigation;
}

export interface IDTermTypeFacilityUnitNavigation {
	idTerm:      number;
	idTermGroup: number;
	term:        string;
}

export interface Person {
	idFacilityUnitDetailPerson: number;
	idFacilityUnitDetail:       number;
	idPerson:                   string;
	isEnable:                   boolean;
	idPersonNavigation:         IDPersonNavigation;
}

export interface IDPersonNavigation {
	idPerson:           string;
	typeIdentification: number;
	nuip:               number;
	name:               string;
	surName:            string;
	isCertificated:     boolean;
	idCompany:          string;
	personPhoneNumber:  PersonPhoneNumber[];
}

export interface PersonPhoneNumber {
	idPhoneNumber:           number;
	idTermTypePhoneNumber:   number;
	idCity:                  number;
	isMovil:                 boolean;
	phoneNumber:             string;
	enable:                  boolean;
	phoneNumberVerification: boolean;
	idPerson:                string;
	showOtpComponent?: 			 boolean;
	isLoading?:							 boolean;
}

export interface Paginator {
	totalItems:  number;
	currentPage: number;
	pageSize:    number;
	totalPages:  number;
	startPages:  number;
	endPages:    number;
}
