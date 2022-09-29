import Notification from '../models/Notification'
import { request, Request, response, Response } from 'express'


import twilio from "twilio"

const accountSid = 'AC25d6a398ba3417ca31f9c7a4768c2f28'
const authToken = '69f58bf87ecc53304c6c5e0084f616f0'

const client = twilio(accountSid, authToken)



//Creacion de una afiliacion 
export async function createNotification(req: Request, res: Response){
    try {
        const { nombre_envia, nombre_recibe, mensaje, asunto, id_envia,
            id_recibe, celular_recibe, estado, correo_recibe, correo_envia } = req.body
    
        const newNotification = {
            nombre_envia: nombre_envia, nombre_recibe: nombre_recibe, mensaje: mensaje, asunto: asunto, id_envia: id_envia,
            id_recibe: id_recibe, celular_recibe: celular_recibe, estado: estado, correo_recibe: correo_recibe, correo_envia: correo_envia
        }
    
        const notification = new Notification(newNotification)
        await notification.save()
    
        res.json('OK').status(200)
        
    } catch (error) {
        console.error(error);
        res.status(500).send('Error');
    }
}

export async function findAllNotificatio(req: Request, res: Response) {
    try {
        const notification = await Notification.find().sort('-createdAt')
        return res.json(notification).status(200).send('OK')

    } catch (error) {
        console.error(error);
        res.status(500).send('Error');
    }

}

export async function updateEstado(req: Request, res: Response){
    try {
        const { id } = req.params
        const { estado } = req.body
        const updatedEstado = await Notification.findByIdAndUpdate(id, {
            estado
        })
    
        return res.json(updatedEstado).status(200).send('OK')

    } catch (error) {
        console.error(error);
        res.status(500).send('Error');
    }
}
