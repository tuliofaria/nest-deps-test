import { Inject, Injectable } from '@nestjs/common'
import { User } from './user.entity'
import { UsersRepository } from './user.repository'

@Injectable()
export class UsersService {
  constructor(
    @Inject('UsersRepository')
    private readonly usersRepository: UsersRepository) {
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.findAll()
  }
}
