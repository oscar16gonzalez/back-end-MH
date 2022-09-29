import { Router } from 'express'
import * as projectsController from '../controllers/proyectos.controller'

const router = Router();

//http://localhost:4000/proyectos
router.post('/', projectsController.creatProjects)

//http://localhost:4000/proyectos
router.get('/', projectsController.findAllProjects)

//http://localhost:4000/proyectos
router.get('/:id', projectsController.findOneProject)

//http://localhost:4000/proyectos
router.put('/:id', projectsController.updateProject)

//http://localhost:4000/proyectos
router.delete('/:id', projectsController.deleteProject)

export default router;