import { Authority } from './Authority';
import { Entity, Column, ManyToMany, JoinTable, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base/base';
import { Exclude } from 'class-transformer';
// import { UploadedAsset } from './uploaded-asset.entity';

@Entity('user')
export class User extends BaseEntity {
    @Column({ unique: true })
    login ?: string;

    @Column({ nullable: true })
    firstName ?: string;

    @Column({ nullable: true })
    lastName ?: string;

    @Column()
    email ?: string;

    @Column({ default: false })
    activated ?: boolean;

    @Column({ default: 'en' })
    langKey ?: string;

    @ManyToMany(() => Authority, {eager: true})
    @JoinTable()
    authorities ?: any[];

    @Column({
        type: 'varchar',
    })
    @Exclude()
    password ?: string;

    @Column({ name: 'phone' })
    phone ?: string;

    @Column({ nullable: true })
    activationKey ?: string;

    @Column({ nullable: true })
    resetKey ?: string;

    @Column({ nullable: true })
    resetDate ?: Date;

    @Column({ nullable: true , unique: true})
    cnic ?: string;

    // @ManyToOne((type) => UploadedAsset)
    // @JoinColumn({ name: 'logo_id' })
    // logo ?: UploadedAsset;
}
