import {Router} from 'express'
import podcastRouter from './podcast-routes'

const routes = Router()

routes.use('/api/v1/podcast', podcastRouter)

export default routes