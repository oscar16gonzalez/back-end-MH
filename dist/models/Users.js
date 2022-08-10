var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Schema, model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
const userSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    celular: {
        type: Number,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    estado: {
        type: Boolean,
        required: true
    },
    roles: {
        type: String,
        required: true
    },
    proyectos: {
        type: String,
    }
}, {
    versionKey: false,
    timestamps: true
});
userSchema.methods.encryptPassword = function (password) {
    return __awaiter(this, void 0, void 0, function* () {
        const salt = yield bcrypt.genSalt(10);
        return bcrypt.hash(password, salt);
    });
};
userSchema.methods.comparePassword = function (password) {
    return __awaiter(this, void 0, void 0, function* () {
        return bcrypt.compare(password, this.password);
    });
};
export default model('Users', userSchema);
//# sourceMappingURL=Users.js.map