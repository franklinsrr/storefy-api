import { Entity, ManyToOne } from 'typeorm'
import { CostumerEntity } from '@costumer/entities/costumer.entity'
import { BaseEntity } from '@shared/entities/base.entity'

@Entity('carts')
export class CartEntity extends BaseEntity {
    @ManyToOne(() => CostumerEntity)
    costumer!: CostumerEntity
}
