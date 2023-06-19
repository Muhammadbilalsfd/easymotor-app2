import { IsNotEmpty, MinLength, MaxLength, Length, Min, Max, Matches } from 'class-validator';
import { BaseDTO } from './base';

/**
 * A ProductDTO object.
 */
export class ProductDTO extends BaseDTO {
    @IsNotEmpty()
    name!: string;

    description!: string;

    gross_premium!: number;

    sales_tax!: number;

    fed!: number;

    admin_surcharge!: number;

    year_start!: number;

    year_end!: number;

    cc_start!: number;

    cc_end!: number;

    // @ApiModelProperty({ type: UploadedAssetDTO, description: 'doc relationship' })
    // doc: UploadedAssetDTO;

    // @ApiModelProperty({ type: VehicleAssemblyTypeDTO, description: 'assembly relationship' })
    // assembly: VehicleAssemblyTypeDTO;

    // @ApiModelProperty({ type: PartnerProductsDTO, isArray: true, description: 'partners relationship' })
    // partners: PartnerProductsDTO[];

    // @ApiModelProperty({ type: ProductEnabledOffersDTO, isArray: true, description: 'productOffers relationship' })
    // productOffers: ProductEnabledOffersDTO[];

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
