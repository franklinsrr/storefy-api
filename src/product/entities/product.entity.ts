import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
} from 'typeorm'
import { BaseEntity } from '@shared/entities/base.entity'
import { SellerEntity } from '@seller/entities/seller.entity'
import { CategoryEntity } from '@category/entities/category.entity'
import { ProductVariantEntity } from '@productVariant/entities/productVariant.entity'
import { ImageEntity } from '@image/entities/image.entity'

@Entity('products')
export class ProductEntity extends BaseEntity {
    @Column({
        type: 'varchar',
        nullable: false,
        length: 200,
    })
    name!: string

    @Column({
        type: 'varchar',
        nullable: false,
        length: 400,
    })
    description!: string

    @Column({
        type: 'numeric',
        nullable: false,
        default: 0.0,
    })
    price!: number

    @ManyToOne(() => SellerEntity)
    seller!: SellerEntity

    @OneToMany(() => ImageEntity, (image) => image.product, { nullable: true })
    images!: ImageEntity[]

    @OneToMany(
        () => ProductVariantEntity,
        (productVariant) => productVariant.product,
        { nullable: true }
    )
    productVariants!: ProductVariantEntity[]

    @ManyToMany(() => CategoryEntity)
    @JoinTable()
    categories!: CategoryEntity[]
}
