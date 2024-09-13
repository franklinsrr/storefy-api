import { Column, Entity, ManyToOne } from 'typeorm'
import { BaseEntity } from '@shared/entities/base.entity'
import { ProductVariantEntity } from '@productVariant/entities/productVariant.entity'
import { CartEntity } from '@cart/entities/cart.entity'

@Entity('cart_items')
export class CartItemEntity extends BaseEntity {
    @Column({
        type: 'int',
        nullable: false,
    })
    quantity!: number

    @ManyToOne(() => ProductVariantEntity)
    productVariant!: ProductVariantEntity

    @ManyToOne(() => CartEntity)
    cart!: CartEntity
}
