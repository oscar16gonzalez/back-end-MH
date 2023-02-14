import { Router } from 'express'
import * as authorizationController from '../controllers/authorization.controller'

const router = Router();

//http://localhost:3000/authorization
router.post('/', authorizationController.createAuthorization)

//http://localhost:3000/authorization
router.get('/', authorizationController.findAllAuthorization)

//http://localhost:3000/authorization/
router.delete ('/:id', authorizationController.deleteAuthorization)

export default router;