import { BaseDTO } from './base';
export declare class UserDTO extends BaseDTO {
    login?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    activated?: boolean;
    langKey?: string;
    authorities?: any[];
    password?: string;
    phone?: string;
    activationKey?: string;
    resetKey?: string;
    cnic?: string;
    resetDate?: Date;
}
