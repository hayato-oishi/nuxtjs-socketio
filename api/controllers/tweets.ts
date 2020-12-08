import io from 'socket.io-client'
import services from '../services'
import config from '../../nuxt.config.js'

export default {
  async search(req: any, res: any) {
    const socket = io(config.env.SOCKET)
    const query: string = req.query.query
    const result = await services.tweets.search(query)
    socket.emit('post-tweets', result)
    res.status(200).json(result)
  }
}
