import { Column, Entity } from 'typeorm'
import { BaseEntity } from '@shared/entities/base.entity'

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
}
