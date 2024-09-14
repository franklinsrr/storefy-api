import { Column, Entity, ManyToOne } from 'typeorm'
import { BaseEntity } from '@shared/entities/base.entity'
import { ProductVariantEntity } from '@productVariant/entities/productVariant.entity'
import { SellerEntity } from '@seller/entities/seller.entity'
import { CostumerEntity } from '@costumer/entities/costumer.entity'

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

    @ManyToOne(() => ProductVariantEntity)
    productVariant!: ProductVariantEntity

    @ManyToOne(() => SellerEntity)
    seller!: SellerEntity

    @ManyToOne(() => CostumerEntity)
    costumer!: CostumerEntity
}
