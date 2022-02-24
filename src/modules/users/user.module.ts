import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersService } from './user.service'
import { UsersController } from './user.controller'
import { User } from './user.entity'
import { UsersRepository } from './user.repository'

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    {
      provide: 'UsersService',
      useClass: UsersService
    },
    {
      provide: 'UsersRepository',
      useClass: UsersRepository
    }
  ],
  controllers: [UsersController]
})
export class UsersModule {}
