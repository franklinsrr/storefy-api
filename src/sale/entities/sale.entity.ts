import { Column, Entity } from 'typeorm'
import { BaseEntity } from '@shared/entities/base.entity'

@Entity('sales')
export class SaleEntity extends BaseEntity {
    @Column({
        type: 'int',
        nullable: false,
    })
    quantity!: number

    @Column({
        type: 'numeric',
        nullable: false,
        name: 'total_price',
    })
    totalPrice!: number

    @Column({
        type: 'timestamp',
        nullable: false,
        name: 'sale_date',
    })
    saleDate!: Date
}
