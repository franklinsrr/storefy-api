import { Column, Entity } from 'typeorm'
import { BaseEntity } from '@shared/entities/base.entity'
import { UserRoleType } from '@shared/interfaces/user'
import { USER_TYPES } from '@shared/constants/user'

@Entity('users')
export class UserEntity extends BaseEntity {
    @Column({
        type: 'varchar',
        length: 90,
    })
    username!: string

    @Column({
        type: 'varchar',
        name: 'first_name',
        length: 50,
    })
    firstName!: string

    @Column({
        type: 'varchar',
        name: 'last_name',
        length: 50,
    })
    lastName!: string

    @Column({
        type: 'varchar',
        nullable: true,
    })
    password!: string

    @Column({
        type: 'enum',
        name: 'user_type',
        enum: USER_TYPES,
        default: 'customer',
        nullable: false,
    })
    userType!: UserRoleType

    @Column({
        type: 'varchar',
        nullable: true,
    })
    phone!: string

    @Column({
        type: 'varchar',
        nullable: false,
    })
    email!: string
}
