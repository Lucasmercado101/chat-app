import { Injectable } from '@nestjs/common';

export interface User {
  id: number;
  userName: string;
}

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  create(user: User) {
    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  findOneById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
