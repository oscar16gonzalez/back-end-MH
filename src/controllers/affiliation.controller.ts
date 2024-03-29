import Affiliation from '../models/Affiliation'
import {request, Request, response, Response} from 'express'


import twilio from "twilio"
import { json } from 'stream/consumers'

const accountSid = 'AC25d6a398ba3417ca31f9c7a4768c2f28'
const authToken = '69f58bf87ecc53304c6c5e0084f616f0'

const client =  twilio(accountSid , authToken)



//Creacion de una afiliacion 
export async function creatAffiliation(req: Request , res: Response){

    console.log('Request de createAffiliation',req.file)


    const {cedula, nombre,apellido, genero, fecha_nacimiento,
        direccion, correo, celular, telefono, nombre_emergencia,
        celular_emergencia,  fecha_ingreso, examen_ingreso, salario,
        cargo, curso_alturas, rut, eps, arl, fondo_pensiones, fonod_cesantias, caja_compensacion,
        estado, numero_cuenta, entidad_bancaria, aux_admin_revision, whatsapp,telegram, asistencia, proyectos, nameProyecto, dias_laborados, fecha_retiro} = req.body
        
        
        const newAffiliation = {
            
            cedula: cedula, nombre: nombre, apellido: apellido, genero: genero, fecha_nacimiento: fecha_nacimiento,
            direccion: direccion, correo: correo, celular:celular, telefono: telefono, nombre_emergencia: nombre_emergencia,
            celular_emergencia: celular_emergencia, fecha_ingreso: fecha_ingreso, examen_ingreso: examen_ingreso, salario: salario,
            cargo: cargo, curso_alturas: curso_alturas, rut:rut, eps:eps, arl: arl, fondo_pensiones: fondo_pensiones, fonod_cesantias: fonod_cesantias, caja_compensacion: caja_compensacion,
            estado: estado, numero_cuenta: numero_cuenta, entidad_bancaria: entidad_bancaria, aux_admin_revision: aux_admin_revision, whatsapp: whatsapp,
            telegram: telegram, archivos: req.file, asistencia: asistencia, proyectos: proyectos, nameProyecto: nameProyecto, dias_laborados: dias_laborados, fecha_retiro: fecha_retiro   
            
          
        }

        console.log("ACA---------",req.file?.filename);
        
        
        const affiliation = new Affiliation(newAffiliation)
        await affiliation.save()

        // return res.json({
        //     message: 'Affiliation successfuly saved',
        //     affiliation,
        //     url: `http://localhost:3000/${req.file?.filename}`
        // });

        res.send({ message: 'Affiliation successfuly saved',
        data: affiliation,
        url: `http://localhost:3000/${req.file?.filename}`})

        console.log(res.send);
        
}

// Buscar todas las afiliaciones
export async function findAllAffiliation(req: Request, res: Response): Promise<Response> {
    
    const affiliation = await Affiliation.find().sort('-createdAt')
    return res.json(affiliation)
}

//Buscar afiliacion por cedula
export async function findOneAffiliation(req: Request, res: Response): Promise<Response> {
    //const { id } = req.params
    const affiliation = await Affiliation.find({cedula: req.params.cedula})

    return res.json(affiliation)
}

//Actualizar por id 
export async function updateAffiliation(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const { correo, rut, curso_alturas, examen_ingreso, eps, arl,fondo_pensiones,
         caja_compensacion, entidad_bancaria, numero_cuenta, proyectos, fonod_cesantias } = req.body

    const updatedAffiliation = await Affiliation.findByIdAndUpdate(id, {
        correo, rut, curso_alturas, examen_ingreso, eps, arl,fondo_pensiones,
         caja_compensacion, entidad_bancaria, numero_cuenta, proyectos, fonod_cesantias
    })

    return res.json({
        message: 'Succesfully update',
        updatedAffiliation
    })
}

//Actualizar estado
export async function updateEstado(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const { estado  } = req.body
    const updatedEstado = await Affiliation.findByIdAndUpdate(id, {
        estado
    })

    return res.json({
        message: 'Succesfully update',
        updatedEstado
    })
}

//Actualizar asistencia
export async function updateAsistencia(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const { asistencia  } = req.body
    const updatedAsistencia = await Affiliation.findByIdAndUpdate(id, {
        asistencia
    })

    return res.json({
        message: 'Succesfully update',
        updatedAsistencia
    })
}

//Actulizar fecha retiro
export async function updateFechaRetiro(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const { fecha_retiro  } = req.body
    const updatedFechaRetiro = await Affiliation.findByIdAndUpdate(id, {
        fecha_retiro
    })

    return res.json({
        message: 'Succesfully update',
        updatedFechaRetiro
    })
}

//Actualizar dias laborados
export async function updateDiasLaborados(req: Request, res: Response) {
    const { id } = req.params
    const { dias_laborados } = req.body

    const updatedDiasLaborados = await Affiliation.findByIdAndUpdate(id, {
        dias_laborados
    })

    return res.json({
        message: true,
        updatedDiasLaborados
    })
}



//Actualizar campos Bancarios y datos de afiliacion
export async function updateDatos(req: Request, res: Response) {
    const { id } = req.params
    const { eps,  arl, fondo_pensiones, caja_compensacion, entidad_bancaria, numero_cuenta, rut, curso_alturas, examen_ingreso, fonod_cesantias, salario, cargo, fecha_ingreso} = req.body
    const updatedDatos = await Affiliation.findByIdAndUpdate(id, {
        eps, arl, fondo_pensiones, caja_compensacion, entidad_bancaria, numero_cuenta, rut, curso_alturas, examen_ingreso, fonod_cesantias, salario, cargo, fecha_ingreso 
    })

    return res.json({
        message: 'Succesfully update',
        updatedDatos
    })
}

//Borrar afiliacion por id 
export async function deleteAffiliation(req: Request, res: Response) : Promise<Response>{
   const { id } = req.params
   const afiliacion = await Affiliation.findByIdAndDelete(id)
   return res.json({
    message: 'Affiliation delete succesfully',
    afiliacion
   })
}


export async function SMS(req: Request, res: Response) {
    const celular = req.params.celular
    const nombre = req.params.nombre

    console.log('aca esta', celular, nombre);
    


    client.messages.create({
        body: `Hola, ${nombre}ya te encuentras listo para comenzar a trabajar con la empresa OHA, presentate el dia sabado a las 8:00 AM`,
        //to: process.env.NUMBER_PHONE,
        // to: `+57${celular}`,
        to: `+573128502119`,
        from: '+18063045822'
    }).then((message) => console.log(message.sid))
    
    res.json({
        message: 'OK'
    })


   
}
