import { BaseEntity } from './base/base';
export declare class User extends BaseEntity {
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
    resetDate?: Date;
    cnic?: string;
}
