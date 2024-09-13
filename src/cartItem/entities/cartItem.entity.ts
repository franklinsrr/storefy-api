import { Column, Entity } from 'typeorm'
import { BaseEntity } from '@shared/entities/base.entity'

@Entity('cart_items')
export class CartItemEntity extends BaseEntity {
    @Column({
        type: 'int',
        nullable: false,
    })
    quantity!: number
}
