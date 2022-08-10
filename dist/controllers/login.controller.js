var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Users from '../models/Users';
import jwt from 'jsonwebtoken';
export const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new Users({
        nombre: req.body.nombre, apellido: req.body.apellido, correo: req.body.correo,
        password: req.body.password, celular: req.body.celular, direccion: req.body.direccion,
        estado: req.body.estado, roles: req.body.roles, proyectos: req.body.proyectos
    });
    user.password = yield user.encryptPassword(user.password);
    const saveUser = yield user.save();
    const token = jwt.sign({ _id: saveUser._id }, process.env.TOKEN_SECRET || 'x-access');
    res.header('token', token).json(saveUser);
});
//Iniciar sesion
export const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield Users.findOne({ correo: req.body.correo });
    if (!user)
        return res.status(400).json('Email or Password is wrong');
    const correctPassword = yield user.comparePassword(req.body.password);
    if (!correctPassword)
        return res.status(400).json('Invalid Password');
    res.json('Successfuly');
});
//buscar todos los usuarios
export function findAllUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield Users.find().sort('-createdAt');
        return res.json(users);
    });
}
//Buscar usuario por correo
export function findOneUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        //const { id } = req.params
        const users = yield Users.find({ correo: req.params.correo });
        return res.json(users);
    });
}
//Borrar usuario por id 
export function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const users = yield Users.findByIdAndDelete(id);
        return res.json({
            message: 'User delete succesfully',
            users
        });
    });
}
// actualizar por id el campo estado 
export function updateUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { estado } = req.body;
        const updatedUser = yield Users.findByIdAndUpdate(id, {
            estado
        });
        return res.json({
            message: 'Succesfully Update',
            updatedUser
        });
    });
}
// actualizar usuario por id el campo proyectos 
export function updateCampoProyect(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { proyectos } = req.body;
        const updatedUser = yield Users.findByIdAndUpdate(id, {
            proyectos
        });
        return res.json({
            message: 'Succesfully Update',
            updatedUser
        });
    });
}
//# sourceMappingURL=login.controller.js.map