var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Proyect from '../models/Proyectos';
//Creacion de un proyecto 
export function creatProyects(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { contrato, objeto_contrato, contratista, nit, nombre_rep_legal, cedula_rep_legal, plazo_ejecucion, valor_contrato, departamento, municipio, usuarios, } = req.body;
        const newProyect = {
            contrato: contrato, objeto_contrato: objeto_contrato, contratista: contratista, nit: nit,
            nombre_rep_legal: nombre_rep_legal, cedula_rep_legal: cedula_rep_legal, plazo_ejecucion: plazo_ejecucion,
            valor_contrato: valor_contrato, departamento: departamento, municipio: municipio, usuarios: usuarios
        };
        const proyects = new Proyect(newProyect);
        yield proyects.save();
        return res.json({
            message: 'Proyect successfuly saved',
            proyects
        });
    });
}
//Buscar todos los proyectos 
export function findAllProyects(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const proyects = yield Proyect.find().sort('-createdAt');
        return res.json(proyects);
    });
}
//Buscar proyectos por id 
export function findOneProyect(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const proyects = yield Proyect.findById(id);
        return res.json(proyects);
    });
}
//Actualizar por id 
export function updateProyect(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { estado } = req.body;
        const updatedProyect = yield Proyect.findByIdAndUpdate(id, {
            estado
        });
        return res.json({
            message: 'Succesfully update',
            updatedProyect
        });
    });
}
//Borrar por id 
export function deleteProyect(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const proyects = yield Proyect.findByIdAndDelete(id);
        return res.json({
            message: 'Affiliation delete succesfully',
            proyects
        });
    });
}
//# sourceMappingURL=proyectos.controller.js.map