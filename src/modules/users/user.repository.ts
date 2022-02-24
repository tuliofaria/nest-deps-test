import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { IUserRepository } from './user-repository.interface';

@Injectable()
export class UsersRepository implements IUserRepository {
  constructor(
    @InjectRepository(User)
    private readonly ormRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[] | undefined> {
    const users = await this.ormRepository.find()
    return users
  }
}