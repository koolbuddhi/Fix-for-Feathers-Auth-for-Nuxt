import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import auth from '@feathersjs/authentication-client'
import io from 'socket.io-client'
import { CookieStorage } from 'cookie-storage'

const host = process.env.API_HOST || 'http://localhost:3080'

const storage = new CookieStorage()
const socket = io(host, { transports: ['websocket'] })
const app = feathers()
  .configure(socketio(socket))
  .configure(auth({ storage }))

export default app
