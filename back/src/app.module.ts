import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { MessagesModule } from './modules/messages/messages.module';

@Module({
  imports: [UsersModule, MessagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
