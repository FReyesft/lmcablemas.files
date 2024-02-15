import { ErrorResponse } from "./ErrorResponse.interface";

export interface RequestAuthMachine {
	machineName?: string;
	machinePassword?: string;
	appToken?: string;
	idCompany?: string;
}

export interface ResponseAuthMachine extends ErrorResponse {
	token?: Token;
}

export interface Token {
	accessToken?: string;
	refreshToken?: string;
	expiredTime?: Date;
}

export interface JwtToken {
	Email?: string;
	UserName?: string;
	PhoneNumber?: string;
	IdPerson?: number;
	nbf?: number;
	exp?: number;
	iat?: number;
}