import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { NewsAPIService } from './newsapi/newsapi.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly newsService: NewsAPIService) {}

  @Get()
  getNewsMethod(): Promise<string> {
    return this.newsService.getNews();
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getProfile(@Request() req) {
    return req.user; // The user will be set in the request after successful JWT validation
  }
}
