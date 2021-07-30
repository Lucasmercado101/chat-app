import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './user.model';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => User)
  async user(@Args('id') id: string) {
    return this.usersService.findOneById(id);
  }

  @Query(() => [User], { name: 'users' })
  async getUsers() {
    return this.usersService.findAll();
  }

  @Mutation(() => User)
  async createUser(@Args('userName') userName: string) {
    return this.usersService.create({ userName });
  }
}
