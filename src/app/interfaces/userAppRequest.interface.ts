import { ErrorResponse } from "./ErrorResponse.interface";
import { Company, IDCompanyNavigation } from "./company.interface";
import { Person } from "./person.interface";
import { Token } from "./requestAuthMachine.interface";

export interface UserAppRequest {
    username  ?: string;
    password  ?: string;
    idCompany?: string;
    appToken?: string;
  }
  
  export interface UserAppResponse extends ErrorResponse {
    userApp?: SingleUserAppResponse;
  }

  export interface ResponseNewAuth extends ErrorResponse {
    userApp?: UserApp;
  }
  
  export interface UserApp {
    userName?:          string;
    idPerson?: number;
    userAppRolCompany?: UserAppRolCompany[];
  }

  export interface UserAppRolCompany {
    idCompanyNavigation?: IDCompanyNavigation;
  }

  export interface UserAppEmployeeResponse extends ErrorResponse {
    token?: Token;
  }
  
  export interface SingleUserAppResponse {
    userName          ?: string;
    idPersonNavigation?: {
      employee ?: User[]
    }
  }

  export interface User {
    idPersonNavigation         ?: Person,
    idTermJobPositionNavigation?: string;
    idCompany                  ?: string;
    idCompanyNavigation        ?: Company,
    idEmployee                 ?: number;
    idPerson                   ?: number;
    beginDate                  ?: Date;
    idTermJobPosition          ?: number;
    endDate                    ?: Date;
  }