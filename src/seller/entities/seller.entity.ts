import { Entity, Column } from 'typeorm'
import { BaseEntity } from '@shared/entities/base.entity'

@Entity('sellers')
export class SellerEntity extends BaseEntity {
    @Column({
        nullable: false,
        type: 'varchar',
        length: 300,
    })
    storeName!: string
}
