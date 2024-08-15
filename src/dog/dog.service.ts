import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  getHello(): string {
    return 'WOW-WOW';
  }
  public introduce(): string {
    return 'My name is REX!';
  }
}
