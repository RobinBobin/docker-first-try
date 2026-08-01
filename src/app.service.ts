import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  // eslint-disable-next-line @typescript-eslint/class-methods-use-this
  getHello(): string {
    const { NODE_ENV } = process.env

    return `🎉🎉🎉 Viva, Nest + Docker in ${NODE_ENV}! 🎉🎉🎉`
  }
}
