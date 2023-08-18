import pino, { Logger as PinoInstance } from 'pino'
import { Logger } from '@thomazmz/core-context'
import { PinoConfig } from './pino-config'

export class PinoLogger implements Logger {

  private readonly instance: PinoInstance

  public constructor(pinoConfig: PinoConfig) {
    this.instance = pino({
      level: pinoConfig.level,
    })
  }

  trace(message?: any, ...optionalParams: any[]): void {
    this.instance.trace(message, ...optionalParams)
  }

  debug(message?: any, ...optionalParams: any[]): void {
    this.instance.debug(message, ...optionalParams)
  }

  info(message?: any, ...optionalParams: any[]): void {
    this.instance.info(message, ...optionalParams)
  }

  warn(message?: any, ...optionalParams: any[]): void {
    this.instance.warn(message, ...optionalParams)
  }

  error(message?: any, ...optionalParams: any[]): void {
    this.instance.error(message, ...optionalParams)
  }
}
