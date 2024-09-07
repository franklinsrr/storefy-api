import { Column, Entity } from 'typeorm'
import { BaseEntity } from '@shared/entities/base.entity'

@Entity('category')
export class CategoryEntity extends BaseEntity {
    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
    })
    name!: string

    @Column({
        type: 'varchar',
        length: 300,
        nullable: false,
    })
    description!: string
}
