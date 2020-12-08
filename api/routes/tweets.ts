import { Router } from 'express'
import controller from '../controllers'

const router = Router()

router.get('/tweets', controller.tweets.search)

export default router
