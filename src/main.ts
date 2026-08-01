import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module.js'

const bootstrap = async (): Promise<void> => {
  const app = await NestFactory.create(AppModule)
  const defaultPort = 3000

  const { PORT = '' } = process.env
  const port = PORT ? Number.parseInt(PORT, 10) : defaultPort

  if (Number.isNaN(port)) {
    throw new TypeError('Port must be a decimal number, if specified')
  }

  await app.listen(port)
}

void bootstrap()
