import Authorization from '../models/Authorization'
import {request, Request, response, Response} from 'express';

//POST
export async function createAuthorization(req: Request, res: Response) {
    const { codigo } = req.body

    const newAuthorization = { codigo: codigo }

    const authorizations = new Authorization(newAuthorization)
    await authorizations.save()

    return res.json({
        message: true,
        authorizations
    })
}

//GET ALL 
export async function findAllAuthorization(req: Request, res: Response) {
    const authorizations = await Authorization.find().sort('-createdAt')
    return res.json(authorizations)
}


//DELETE POR ID 
export async function deleteAuthorization(req: Request, res: Response) {
    const { id } = req.params
    const authorizations = await Authorization.findByIdAndDelete(id)

    return res.json({
        message: true,
        authorizations
    })
}