import { IDCityNavigation } from "./address.interface";
import { ErrorResponse } from "./ErrorResponse.interface";
import { Navigation } from "./terms.interface";
import { Contract } from "./contract.interface";

export interface ResponsePersonList extends ErrorResponse {
	listPerson: ListPerson[];
}

export interface ListPerson {
	idPerson?: number;
	typePerson?: number;
	typeIdentification?: number;
	nuip?: number;
	birthday?: Date;
	idCity?: number;
	businessName?: string;
	rh?: number;
	name?: string;
	surName?: string;
	gender?: number;
	idCompany?: string;
	expeditionDate?: Date;
	isAlive?: boolean;
	isCertificated?: boolean;
	personHash?: string;
	contract?: Contract[];
	rhNavigation?: Navigation;
	genderNavigation?: Navigation;
	typePersonNavigation?: Navigation;
	idCityNavigation?: IDCityNavigation;
	personPhoneNumber?: PersonPhoneNumberDto[];
	personEmail? : PersonEmailDto[];

}

export interface PersonPhoneNumberDto {
    idPhoneNumber: number;
    idTermTypePhoneNumber: number;
    idCity: number;
    isMovil: boolean;
    phoneNumber: string;
    enable: boolean;
    phoneNumberVerification: boolean;
    idPerson: number;    
}

export interface PhoneRequest extends PersonPhoneNumberDto {
	idPerson: number;
}

export interface PhoneResponse extends PhoneRequest, ErrorResponse {
	phone: PhoneRequest;
}

export interface PersonEmailDto {
    idPersonEmail: number;
    idPerson: number;
    email: string;
    enable: boolean;
    emailVerification: boolean;
    idTermTypeEmail: number;    
}

export interface IDPersonNavigation {
	idPerson?: number;
	typePerson?: number;
	typeIdentification?: number;
	nuip?: number;
	birthday?: Date;
	idCity?: number;
	businessName?: string;
	rh?: number;
	name?: string;
	surName?: string;
	gender?: number;
	isCertificated?: boolean;
}

export interface ResponsePersonNuip extends ErrorResponse {
	person: Person;
}

export interface ResponsePerson extends ErrorResponse {
	person?: Person;
}
export interface Person {
	idPerson: number;
	typePerson: number;
	typeIdentification: number;
	nuip: number;
	birthday: Date;
	idCity: number;
	businessName: string;
	rh: number;
	name: string;
	surName: string;
	gender: number;
	isCertificated: boolean;
	contract?: Contract[];
	rhNavigation?: Navigation;
	genderNavigation?: Navigation;
	typePersonNavigation?: Navigation;
	idCityNavigation?: IDCityNavigation;
	personHash?: string;
}

