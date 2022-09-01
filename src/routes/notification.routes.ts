import { Router } from 'express'
import * as notificarionController from '../controllers/notification.controller'
import multer from '../libs/multer'

const router = Router();

//http://localhost:4000/notification
router.post('/', notificarionController.createNotification)


//http://localhost:4000/notification
router.get('/', notificarionController.findAllNotificatio)

//http://localhost:4000/notification
router.put('/:id',notificarionController.updateEstado)



export default router;