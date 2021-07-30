import { Injectable, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserData: User): Promise<User> {
    const user = await this.userModel.findOne(createUserData).exec();
    if (user) throw new ConflictException();
    const createdUser = new this.userModel(createUserData);
    return createdUser.save();
  }

  findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  findOneByUserName(userName: string): Promise<User> {
    return this.userModel.findOne({ userName }).exec();
  }

  findOneById(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }
}
