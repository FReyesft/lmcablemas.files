import { ErrorResponse } from "./ErrorResponse.interface";

export interface PersonByNuipResponse extends ErrorResponse {
	person: Person;
}

export interface Error {
	code:    number;
	isError: boolean;
	message: null;
	block:   boolean;
}

export interface Person {
	idPerson:           string;
	typeIdentification: number;
	nuip:               number;
	name:               string;
	surName:            string;
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
}
