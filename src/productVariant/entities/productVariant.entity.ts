import { Column, Entity } from 'typeorm'
import { BaseEntity } from '@shared/entities/base.entity'

@Entity('product_variant')
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
}
