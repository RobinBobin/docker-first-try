import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  // eslint-disable-next-line @typescript-eslint/class-methods-use-this
  getHello(): string {
    return 'Viva, Nest!'
  }
}
