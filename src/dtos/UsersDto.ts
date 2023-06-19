import { IsString, IsEmail } from 'class-validator';
import { BaseDTO } from './base';
import { Exclude } from 'class-transformer';

/**
 * An User DTO object.
 */
export class UserDTO extends BaseDTO {
	
    @IsString()
    login ?: string;

    firstName?: string;

    lastName?: string;

    @IsEmail()
    email ?: string;

    activated?: boolean;

    langKey?: string;

    authorities?: any[];

    @Exclude()
    password ?: string;

    phone?: string;

    activationKey?: string;

    resetKey?: string;

    cnic?: string;

    resetDate?: Date;

    // logo?: UploadedAssetDTO;
}
