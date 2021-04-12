import { Transform, TransformOptions } from 'class-transformer'
import { IsBoolean } from 'class-validator'

export const BooleanString = (options?: TransformOptions) => (target: any, key: string) => {
  Transform(({ value }) => (value === 'true' ? true : value === 'false' ? false : value), options)(target, key)
  IsBoolean()(target, key)
}
