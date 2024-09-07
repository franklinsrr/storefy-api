import { Column, Entity } from 'typeorm'
import { BaseEntity } from '@shared/entities/base.entity'

@Entity('cart_item')
export class CartItem extends BaseEntity {
    @Column({
        type: 'int',
        nullable: false,
    })
    quantity!: number
}
