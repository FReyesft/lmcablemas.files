export interface CreateRequestAccess {
	idFacility:               string;
	idFacilityUnitDetail:     number;
	requestType:              number;
	commentsFromEmployee:     string;
	persons:                  Person[];
}

export interface Person {
	idPerson?:    string;
	documentType: number;
	nuip:         number;
	name:         string;
	surName:      string;
	company:      string;
}
