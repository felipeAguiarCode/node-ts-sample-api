import { Router } from 'express'
import { PodcastController } from '../controllers/podcast-controller'

const podcastRouter = Router()
const podcastController = new PodcastController()

podcastRouter.get('/', podcastController.index)

export default podcastRouter