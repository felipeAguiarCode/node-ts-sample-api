import {Request, Response} from 'express'
import { PodcastService } from '../services/podcast-service'

export class PodcastController{
    private service: PodcastService

    constructor() {
        this.service = new PodcastService()
    }

    async index(req: Request, res: Response){
        const result = await this.service.index()
        return res.json({mensseger:'ola'}) 
    }

}