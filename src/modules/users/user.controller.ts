import { Controller, Get, Inject } from '@nestjs/common'
import { User } from './user.entity'
import { UsersService } from './user.service'

@Controller()
export class UsersController {
  constructor(
    @Inject('UsersService')
    private readonly usersService: UsersService) {
  }

  @Get()
  getHello(): Promise<User[]> {
    return this.usersService.findAll()
  }
}
