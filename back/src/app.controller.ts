import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { LoginGuard } from './modules/auth/login.guard';

@Controller()
export class AppController {
  @UseGuards(LoginGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }
}
