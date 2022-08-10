var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Affiliation from '../models/Affiliation';
import twilio from "twilio";
const accountSid = 'AC25d6a398ba3417ca31f9c7a4768c2f28';
const authToken = '69f58bf87ecc53304c6c5e0084f616f0';
const client = twilio(accountSid, authToken);
//Creacion de una afiliacion 
export function creatAffiliation(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(req.files);
        const { cedula, nombre, apellido, genero, fecha_nacimiento, direccion, correo, celular, telefono, nombre_emergencia, celular_emergencia, fecha_ingreso, examen_ingreso, salario, cargo, curso_alturas, rut, eps, arl, fondo_pensiones, fondo_cesantias, caja_compensacion, estado, numero_cuenta, entidad_bancaria, aux_admin_revision, whatsapp, telegram, asistencia } = req.body;
        const newAffiliation = {
            cedula: cedula, nombre: nombre, apellido: apellido, genero: genero, fecha_nacimiento: fecha_nacimiento,
            direccion: direccion, correo: correo, celular: celular, telefono: telefono, nombre_emergencia: nombre_emergencia,
            celular_emergencia: celular_emergencia, fecha_ingreso: fecha_ingreso, examen_ingreso: examen_ingreso, salario: salario,
            cargo: cargo, curso_alturas: curso_alturas, rut: rut, eps: eps, arl: arl, fondo_pensiones: fondo_pensiones, fondo_cesantias: fondo_cesantias, caja_compensacion: caja_compensacion,
            estado: estado, numero_cuenta: numero_cuenta, entidad_bancaria: entidad_bancaria, aux_admin_revision: aux_admin_revision, whatsapp: whatsapp,
            telegram: telegram, archivos: req.files, asistencia: asistencia
        };
        const affiliation = new Affiliation(newAffiliation);
        yield affiliation.save();
        return res.json({
            message: 'Affiliation successfuly saved',
            affiliation
        });
    });
}
// Buscar todas las afiliaciones
export function findAllAffiliation(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const affiliation = yield Affiliation.find().sort('-createdAt');
        return res.json(affiliation);
    });
}
//Buscar afiliacion por cedula
export function findOneAffiliation(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        //const { id } = req.params
        const affiliation = yield Affiliation.find({ cedula: req.params.cedula });
        return res.json(affiliation);
    });
}
//Actualizar por id 
export function updateAffiliation(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { correo, rut, curso_alturas, examen_ingreso, eps, arl, fondo_pensiones, fondo_cesantias, caja_compensacion, entidad_bancaria, numero_cuenta } = req.body;
        const updatedAffiliation = yield Affiliation.findByIdAndUpdate(id, {
            correo, rut, curso_alturas, examen_ingreso, eps, arl, fondo_pensiones,
            fondo_cesantias, caja_compensacion, entidad_bancaria, numero_cuenta
        });
        return res.json({
            message: 'Succesfully update',
            updatedAffiliation
        });
    });
}
//Actualizar estado
export function updateEstado(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { estado } = req.body;
        const updatedEstado = yield Affiliation.findByIdAndUpdate(id, {
            estado
        });
        return res.json({
            message: 'Succesfully update',
            updatedEstado
        });
    });
}
//Actualizar asistencia
export function updateAsistencia(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { asistencia } = req.body;
        const updatedAsistencia = yield Affiliation.findByIdAndUpdate(id, {
            asistencia
        });
        return res.json({
            message: 'Succesfully update',
            updatedAsistencia
        });
    });
}
//Borrar afiliacion por id 
export function deleteAffiliation(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const afiliacion = yield Affiliation.findByIdAndDelete(id);
        return res.json({
            message: 'Affiliation delete succesfully',
            afiliacion
        });
    });
}
export function SMS(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const celular = req.params.celular;
        const nombre = req.params.nombre;
        console.log('aca esta', celular, nombre);
        client.messages.create({
            body: `Hola, ${nombre} ya te encuentras listo para comenzar a trabajar con la empresa OHA, presentate el dia sabado a las 8:00 AM`,
            //to: process.env.NUMBER_PHONE,
            // to: `+57${celular}`,
            to: `+573128502119`,
            from: '+18063045822'
        }).then((message) => console.log(message.sid));
        res.json({
            message: 'OK'
        });
    });
}
//# sourceMappingURL=affiliation.controller.js.map