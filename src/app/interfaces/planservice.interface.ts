export interface IDPlanServiceNavigation {
	idPlanService?: number;
	idCompany?: string;
	planService1?: string;
	description?: string;
	enable?: boolean;
	planServiceDetail?: PlanServiceDetail[];
}

export interface PlanServiceDetail {
	idDetailService?: number;
	cost?: number;
	idItemService?: number;
	itemName?: string;
	idItem?: number;
}

export interface PlanService {
	idPlanService?: number;
	idCompany?: string;
	planService1?: string;
	description?: string;
	planServiceDetail?: PlanServiceDetail[];
	enable?: boolean;
}