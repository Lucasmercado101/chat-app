import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import * as path from 'path';
import { EventsModule } from './modules/events/events.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      autoSchemaFile: path.join(process.cwd(), 'src/schema.gql'),
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    UsersModule,
    EventsModule,
  ],
})
export class AppModule {}
