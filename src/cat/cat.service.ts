import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  getHello(): string {
    return 'MYEOW';
  }
  public introduce(): string {
    return 'My name is TOM';
  }
}
