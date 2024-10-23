import { Module } from '@nestjs/common';
import { UsersModule } from '../../users/users.module';
import { JwtAuthModule } from '../jwt/jwt-auth.module';
import { PassportModule } from '@nestjs/passport';
import { FacebookStrategy } from './facebook-oauth.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'facebook' }),
    UsersModule,
    JwtAuthModule
  ],
  controllers: [],
  providers: [FacebookStrategy],
})
export class GoogleOauthModule {}