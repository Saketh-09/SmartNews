import { Injectable, OnModuleInit } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService implements OnModuleInit {
  private users: any[] = [];

  async onModuleInit() {
    this.users = [
      { userId: 1, username: 'john', password: await bcrypt.hash('changeme', 10) },
      { userId: 2, username: 'chris', password: await bcrypt.hash('secret', 10) },
    ];
  }

  async findOne(username: string) {
    return this.users.find(user => user.username === username);
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.findOne(username);
    if (user && await bcrypt.compare(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
