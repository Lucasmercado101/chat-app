import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'userName' });
  }

  /**
   * If a user is found and valid, it's returned so request
   * handling can continue, and Passport can do some further housekeeping.
   * If it's not found, we throw an exception and let Nest's exceptions layer handle it.
   */
  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }

  // authenticate(a, b) {
  //   console.log(a);
  //   console.log('\n--------------------\n');
  //   console.log(b);
  // }
}
