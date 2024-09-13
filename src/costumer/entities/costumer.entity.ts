import { Entity, Column } from 'typeorm'
import { BaseEntity } from '@shared/entities/base.entity'

@Entity('costumers')
export class CostumerEntity extends BaseEntity {
    @Column({
        nullable: true,
        type: 'varchar',
        length: 400,
    })
    address!: string
}
