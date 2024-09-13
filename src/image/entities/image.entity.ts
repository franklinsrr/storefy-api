import { BaseEntity } from '@shared/entities/base.entity'
import { Column, Entity } from 'typeorm'

@Entity('images')
export class ImageEntity extends BaseEntity {
    @Column({
        type: 'varchar',
        name: 'image_url',
    })
    imageURL!: string

    @Column({
        type: 'varchar',
        name: 'alt_text',
    })
    altText!: string
}
