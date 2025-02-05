import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsAPIService } from './newsapi/newsapi.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true, }), UsersModule, AuthModule,],
  controllers: [AppController],
  providers: [AppService, NewsAPIService],
})
export class AppModule {}
