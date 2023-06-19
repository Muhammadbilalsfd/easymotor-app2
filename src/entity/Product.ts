/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column, JoinColumn, OneToOne, ManyToOne, OneToMany, ManyToMany, JoinTable, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { BaseEntity } from './base/base';

/**
 * A Product.
 */
@Entity('product')
export class Product {

    @PrimaryGeneratedColumn()
    id ?: number;

    @Column({ nullable: true })
    createdBy?: string;

    @CreateDateColumn({ nullable: true })
    createdDate?: Date;

    @Column({ nullable: true })
    lastModifiedBy?: string;
    
    @UpdateDateColumn({ nullable: true })
    lastModifiedDate?: Date;

    @Column({ name: 'name', unique: true })
    name ?: string;

    @Column({ name: 'description', nullable: true })
    description ?: string;

    @Column({ type: 'float', name: 'gross_premium', nullable: true })
    gross_premium ?: number;

    @Column({ type: 'float', name: 'sales_tax', nullable: true })
    sales_tax ?: number;

    @Column({ type: 'float', name: 'fed', nullable: true })
    fed ?: number;

    @Column({ type: 'float', name: 'admin_surcharge', nullable: true })
    admin_surcharge ?: number;

    @Column({ type: 'integer', name: 'year_start', nullable: true })
    year_start ?: number;

    @Column({ type: 'integer', name: 'year_end', nullable: true })
    year_end ?: number;

    @Column({ type: 'integer', name: 'cc_start', nullable: true })
    cc_start ?: number;

    @Column({ type: 'integer', name: 'cc_end', nullable: true })
    cc_end ?: number;

    // @ManyToOne((type) => UploadedAsset, {eager: true})
    // doc: UploadedAsset;

    // @ManyToOne((type) => VehicleAssemblyType)
    // assembly: VehicleAssemblyType;

    // @OneToMany((type) => PartnerProducts, (other) => other.product, {eager: true})
    // partners: PartnerProducts[];

    // @OneToMany((type) => ProductEnabledOffers, (other) => other.productId, {eager: true})
    // productOffers: ProductEnabledOffers[];

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
