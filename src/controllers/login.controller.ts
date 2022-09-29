 import  Users, { IUser } from '../models/Users'
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import config from '../config'

export const signUp = async (req: Request, res: Response) => {
    try {
        const user: IUser = new Users({
            nombre: req.body.nombre, apellido: req.body.apellido, correo: req.body.correo,
            password: req.body.password, celular: req.body.celular, direccion: req.body.direccion,
            estado: req.body.estado, roles: req.body.roles, proyectos: req.body.proyectos
        })
        user.password = await user.encryptPassword(user.password)
        const saveUser = await user.save()
    
        const token: string = jwt.sign({_id: saveUser._id}, process.env.TOKEN_SECRET || 'x-access')
    
        res.header('token', token).json(saveUser).status(200).send('OK')

    } catch (error) {
        console.error(error);
        res.status(500).send('Error'); 
    }
    
}

//Iniciar sesion
export const signIn = async (req: Request, res: Response) => {
    try {
        const user = await Users.findOne({correo: req.body.correo})

        if (!user) return res.status(400).json('Email or Password is wrong')
    
        const correctPassword: boolean = await user.comparePassword(req.body.password)
        if (!correctPassword) return res.status(400).json('Invalid Password')
        res.json('OK').status(200)

    } catch (error) {
        console.error(error);
        res.status(500).send('Error'); 
    }
}

//buscar todos los usuarios
export async function findAllUsers(req: Request, res: Response){
    try {
        const users = await Users.find().sort('-createdAt')
        return res.json(users).status(200).send('OK')

    } catch (error) {
        console.error(error);
        res.status(500).send('Error'); 
    }
}

//Buscar usuario por correo
export async function findOneUser(req: Request, res: Response) {
    try {
        const users = await Users.find({correo: req.params.correo})
        return res.json(users).status(200).send('OK')
    } catch (error) {
        console.error(error);
        res.status(500).send('Error');
    }
}

//Borrar usuario por id 
export async function deleteUser(req: Request, res: Response){
    try {
        const { id } = req.params
        const users = await Users.findByIdAndDelete(id)
        return res.json(users).status(200).send('OK')

    } catch (error) {
        console.error(error);
        res.status(500).send('Error');
    }
 }


 // actualizar por id el campo estado 
 export async function updateUser(req: Request, res: Response){
    try {
        const { id } = req.params
        const { estado } = req.body
        const updatedUser = await Users.findByIdAndUpdate(id, {
            estado
        })
    
        return res.json(updatedUser).status(200).send('OK')

    } catch (error) {
        console.error(error);
        res.status(500).send('Error');
    }
 }

  // actualizar usuario por id el campo proyectos 
  export async function updateCampoProyect(req: Request, res: Response){
    try {
        const { id } = req.params
        const { proyectos } = req.body
        const updatedUser = await Users.findByIdAndUpdate(id, {
            proyectos
        })
    
        return res.json(updatedUser).status(200).send('OK')

    } catch (error) {
        console.error(error);
        res.status(500).send('Error');
    }
 }

