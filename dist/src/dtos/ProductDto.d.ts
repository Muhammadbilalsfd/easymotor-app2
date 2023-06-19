import { BaseDTO } from './base';
export declare class ProductDTO extends BaseDTO {
    name: string;
    description: string;
    gross_premium: number;
    sales_tax: number;
    fed: number;
    admin_surcharge: number;
    year_start: number;
    year_end: number;
    cc_start: number;
    cc_end: number;
}
