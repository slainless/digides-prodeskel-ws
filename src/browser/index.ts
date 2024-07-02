import { ProdeskelWebSocket as Core, getEventName } from '../core';
import { EventEmitterWebSocket } from './websocket'

export { getEventName }

export class ProdeskelWebSocket extends Core {
  protected ws: EventEmitterWebSocket

  constructor(url: string, procotols?: string | string[], protected connectionTimeout = 10000) {
    super()
    this.ws = new EventEmitterWebSocket(url, procotols)
    this.init()
  }
}