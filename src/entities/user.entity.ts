import { Column, Entity } from 'typeorm'
import { BaseEntity } from '@config/base.entity'
import { UserRoleType } from '@interfaces/user'
import { USER_TYPES } from 'cosntants/user'

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
    @Column({ length: 90 })
    username!: string

    @Column({
        name: 'first_name',
        length: 50,
    })
    firstName!: string

    @Column({
        name: 'last_name',
        length: 50,
    })
    lastName!: string

    @Column({ nullable: true })
    password!: string

    @Column({
        type: 'enum',
        name: 'user_type',
        enum: USER_TYPES,
        default: 'customer',
        nullable: false,
    })
    userType!: UserRoleType

    @Column({ nullable: true })
    phone!: string

    @Column()
    email!: string
}
