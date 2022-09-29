import Project from '../models/Proyectos'
import {request, Request, response, Response} from 'express';


//Creacion de un proyecto 
export async function creatProjects(req: Request, res: Response) {
    try {
        const { contrato, objeto_contrato, contratista, nit, nombre_rep_legal, cedula_rep_legal,
            plazo_ejecucion, valor_contrato, departamento, municipio, usuarios, } = req.body
        
    
        const newProject = {
                contrato: contrato, objeto_contrato: objeto_contrato, contratista: contratista, nit: nit,
                nombre_rep_legal: nombre_rep_legal, cedula_rep_legal: cedula_rep_legal, plazo_ejecucion: plazo_ejecucion,
                valor_contrato: valor_contrato, departamento: departamento, municipio: municipio, usuarios:usuarios
        }
    
        const projects = new Project(newProject)
        await projects.save()
    
        return res.json(projects).status(200).send('OK')

    } catch (error) {
        console.error(error);
        res.status(500).send('Error');
    }

}


//Buscar todos los proyectos 
export async function findAllProjects(req: Request, res: Response){
    try {
        const projects = await Project.find().sort('-createdAt')
        return res.json(projects).status(200).send('OK')
    } catch (error) {
        console.error(error);
        res.status(500).send('Error');
    }


}

//Buscar proyectos por id 
export async function findOneProject(req: Request, res: Response){
    try {
        const { id } = req.params
        const projects = await Project.findById(id)
    
        return res.json(projects).status(200).send('OK')

    } catch (error) {
        console.error(error);
        res.status(500).send('Error');
    }

}

//Actualizar por id 
export async function updateProject(req: Request, res: Response){
    try {
        const { id } = req.params
        const { estado } = req.body
        const updatedProject = await Project.findByIdAndUpdate(id, {
            estado
        })
    
        return res.json(updatedProject).status(200).send('OK')

    } catch (error) {
        console.error(error);
        res.status(500).send('Error');
    }

}

//Borrar por id 
export async function deleteProject(req: Request, res: Response) {
    try {
        const { id } = req.params
        const projects = await Project.findByIdAndDelete(id)
        return res.json(projects).status(200).send('OK')

    } catch (error) {
        console.error(error);
        res.status(500).send('Error');
    }
 }
    

