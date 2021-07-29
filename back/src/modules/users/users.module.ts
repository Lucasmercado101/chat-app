import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UsersResolver } from './users.resolver';

@Module({
  providers: [UsersService, UsersResolver],
})
export class UsersModule {}
