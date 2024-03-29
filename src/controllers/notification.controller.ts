import Notification from '../models/Notification'
import { request, Request, response, Response } from 'express'


import twilio from "twilio"

const accountSid = 'AC25d6a398ba3417ca31f9c7a4768c2f28'
const authToken = '69f58bf87ecc53304c6c5e0084f616f0'

const client = twilio(accountSid, authToken)



//Creacion de una afiliacion 
export async function createNotification(req: Request, res: Response): Promise<Response> {
    const { nombre_envia, nombre_recibe, mensaje, asunto, id_envia,
        id_recibe, celular_recibe, estado, correo_recibe, correo_envia } = req.body

    const newNotification = {
        nombre_envia: nombre_envia, nombre_recibe: nombre_recibe, mensaje: mensaje, asunto: asunto, id_envia: id_envia,
        id_recibe: id_recibe, celular_recibe: celular_recibe, estado: estado, correo_recibe: correo_recibe, correo_envia: correo_envia
    }

    const notification = new Notification(newNotification)
    await notification.save()

    return res.json({
        message: 'Notificacion successfuly saved',
        notification
    });
}

export async function findAllNotificatio(req: Request, res: Response): Promise<Response> {
    const notification = await Notification.find().sort('-createdAt')
    return res.json(notification)

}

export async function updateEstado(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const { estado } = req.body
    const updatedEstado = await Notification.findByIdAndUpdate(id, {
        estado
    })

    return res.json({
        message: 'Succesfully update',
        updatedEstado
    })
}

export async function deleteNotification(req: Request, res: Response) {
    const { id } = req.params
    const notification = await Notification.findByIdAndDelete(id)
    return res.json({
        message: 'Notification delete succesfully',
        notification
    })
}
