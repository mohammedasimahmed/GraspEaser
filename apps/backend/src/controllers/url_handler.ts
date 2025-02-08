import { Request, Response } from "express"

async function url_handler(request: Request, response: Response) {
    const url: string = request.body()
    if (url.includes("youtube")) {

    }
    else {

    }
}

export default url_handler