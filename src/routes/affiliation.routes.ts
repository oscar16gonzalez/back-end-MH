import { Router } from 'express'
import * as affiliationController from '../controllers/affiliation.controller'
import multer from '../libs/multer'

const router = Router();

//http://localhost:4000/afiliacion
router.post('/', multer.single('archivos'),affiliationController.creatAffiliation)

//http://localhost:4000/afiliacion
router.get('/', affiliationController.findAllAffiliation)

//http://localhost:4000/afiliacion
router.get('/:cedula', affiliationController.findOneAffiliation)

//http://localhost:4000/afiliacion/nombre/celular
router.get('/sms/:nombre/:celular', affiliationController.SMS)

//http://localhost:4000/afiliacion
router.put('/:id', affiliationController.updateAffiliation)

router.put('/estado/:id', affiliationController.updateEstado)

router.put('/asistencia/:id', affiliationController.updateAsistencia)

//http://localhost:4000/afiliacion/datos/
router.put('/datos/:id', affiliationController.updateDatos)

//http://localhost:4000/afiliacion/diaslaborados/
router.put('/diaslaborados/:id', affiliationController.updateDiasLaborados)


//http://localhost:4000/afiliacion
router.delete('/:id', affiliationController.deleteAffiliation)

export default router;