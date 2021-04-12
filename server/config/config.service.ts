import { Injectable } from '@nestjs/common'
import nconf, { Provider } from 'nconf'
import path from 'path'
import dotenv from 'dotenv'
import dotenvExpand from 'dotenv-expand'
import fs from 'fs'

@Injectable()
export class ConfigService {
  private nconf: Provider

  constructor() {
    const NODE_ENV = process.env.NODE_ENV || 'development'
    const srcPath = path.resolve(__dirname, '../../..')
    const dotenvFiles = [`.env.${NODE_ENV}.local`, `.env.${NODE_ENV}`, `.env`].map(p => path.resolve(srcPath, p))
    dotenvFiles.forEach(dotenvFile => {
      // eslint-disable-next-line security/detect-non-literal-fs-filename
      if (fs.existsSync(dotenvFile)) {
        dotenvExpand(
          dotenv.config({
            path: dotenvFile,
          })
        )
      }
    })

    this.nconf = nconf.argv().env({
      lowerCase: true,
      parseValues: true,
      separator: '__',
      transform: obj => {
        obj.key = obj.key.replace(/^API_/gi, '')
        return obj
      },
    })
  }

  getValue(key: string) {
    const value = this.nconf.get(key)
    if (!value) {
      throw new Error(`Unknown config key [${key}]`)
    }
    return value
  }
}
