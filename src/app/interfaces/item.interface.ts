export interface IDItemNavigation {
	idItem?: number;
	idCompany?: string;
	idTermTypeItem?: number;
	unitCost?: number;
	itemName?: string;
	saleCosto?: number;
	ticketType?: TicketType;
	genericService?: GenericService;
}

export interface GenericService {
	idTermGenericService?: number;
	jsonparameters?: string;
}

export interface TicketType {
	idTermTicketAction?: number;
	score?: number;
}