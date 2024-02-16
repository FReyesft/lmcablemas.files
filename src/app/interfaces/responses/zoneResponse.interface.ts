import { ErrorResponse } from "../ErrorResponse.interface";

export interface ZoneResponse extends ErrorResponse{
	zones: ZoneElement[];
}

export interface ZoneElement {
	idZone: number;
	name:   string;
}
