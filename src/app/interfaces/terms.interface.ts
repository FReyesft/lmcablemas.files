import { ErrorResponse } from "./ErrorResponse.interface";

export interface Navigation {
	idTerms?: number;
	idTermsGroup?: number;
	term?: string;
	icon?: string;
}

export interface TermContractStatus {
	idTerms?: number;
	idTermsGroup?: number;
	term?: string;
}

export interface IDTermNavigation {
	idTerms?: number;
	idTermsGroup?: number;
	term?: string;
	icon?: string;
}

export interface TermResponse extends ErrorResponse {
	terms: Term[];
}

export interface Term {
	idTerms?: number;
	idTermsGroup?: number;
	term?: string;
}