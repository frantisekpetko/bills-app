import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/server/common/types/user';

@Controller('auth')
export class AuthController {
  constructor(private readonly jwtService: JwtService) {}

  @Get('facebook')
  @UseGuards(AuthGuard('facebook'))
  async facebookLogin(): Promise<void> {
    // Initiates Facebook OAuth login
  }

  @Get('facebook/redirect')
  @UseGuards(AuthGuard('facebook'))
  async facebookRedirect(@Req() req, @Res() res) {
    const user: User = req.user;
    const payload = { email: user.email, sub: user.providerId };
    const token = this.jwtService.sign({ ...payload });
    return res.redirect(`http://localhost:3000/auth/callback?token=${token}`);
  }
}