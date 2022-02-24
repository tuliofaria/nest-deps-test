import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test-deps',
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
