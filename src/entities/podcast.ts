export class Podcast{
    
    id: number
    name: string
    url:string
    guests: string[]
    
    constructor() {
        this.name = ''
        this.id = 0
        this.url = ''
        this.guests = []
    }
}