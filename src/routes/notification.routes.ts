import { Router } from 'express'
import * as notificarionController from '../controllers/notification.controller'
import multer from '../libs/multer'

const router = Router();

//http://localhost:4000/afiliacion
// router.post('/', multer.array('archivos', 10),notificarionController.createNotification)
router.post('/', notificarionController.createNotification)


// //http://localhost:4000/afiliacion
router.get('/', notificarionController.findAllNotificatio)

// //http://localhost:4000/afiliacion
// router.get('/:cedula', affiliationController.findOneAffiliation)

// //http://localhost:4000/afiliacion/nombre/celular
// router.get('/:nombre/:celular', affiliationController.SMS)

// //http://localhost:4000/afiliacion
// router.put('/:id', affiliationController.updateAffiliation)

// router.put('/estado/:id', affiliationController.updateEstado)

// router.put('/asistencia/:id', affiliationController.updateAsistencia)


// //http://localhost:4000/afiliacion
// router.delete('/:id', affiliationController.deleteAffiliation)

export default router;