import { Column, Entity, ManyToOne, OneToMany } from 'typeorm'
import { BaseEntity } from '@shared/entities/base.entity'
import { ProductEntity } from '@product/entities/product.entity'

@Entity('product_variants')
export class ProductVariantEntity extends BaseEntity {
    @Column({
        type: 'varchar',
        nullable: false,
    })
    color!: string

    @Column({
        type: 'varchar',
        nullable: false,
    })
    size!: string

    @Column({
        type: 'int',
        nullable: false,
    })
    stock!: number

    @ManyToOne(() => ProductEntity, (product) => product.productVariants)
    product!: ProductEntity
}
