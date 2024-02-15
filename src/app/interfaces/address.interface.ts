export interface IDAddressAtionNavigation {
	idAddress?: number;
	idNeighborhood?: number;
	address1?: string;
	idCity?: number;
	idCompany?: string;
	latitud?: number;
	longitud?: number;
	idNeighborhoodNavigation?: IDNeighborhoodNavigation;
}

export interface IDNeighborhoodNavigation {
	idNeighborhood?: number;
	idCity?: number;
	idCompany?: string;
	neighborhood1?: string;
	enabled?: boolean;
	jsonParameters?: string;
	idCityNavigation?: IDCityNavigation;
}

export interface IDCityNavigation {
	idCity?: number;
	city1?: string;
	idStateNavigation?: IDStateNavigation;
}

export interface IDStateNavigation {
	idState?: number;
	state1?: string;
	idCountryNavigation?: IDCountryNavigation;
}

export interface IDCountryNavigation {
	idCountry?: number;
	country1?: string;
}

export interface Address {
	idAddress?: number;
	idNeighborhood?: number;
	address1?: string;
	idCity?: number;
	idCompany?: string;
	latitud?: number;
	longitud?: number;
	idNeighborhoodNavigation?: IDNeighborhoodNavigation;
}