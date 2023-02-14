import { Schema, model } from 'mongoose';

const proyectSchema = new Schema({
    contrato: {
        type: String,
        required: true
    },

    objeto_contrato: {
        type: String,
        required: true
    },

    contratista: {
        type: String,
        required: true
    },

    nit: {
        type: String,
        required: true
    },

    nombre_rep_legal: {
        type: String,
        required: true
    },

    cedula_rep_legal: {
        type: String,
        required: true,
    },

    plazo_ejecucion: {
        type: String,

    },

    valor_contrato: {
        type: Number,
        required: true
    },

    departamento: {
        type: String,
        required: true
    },

    url_proceso: {
        type: String,
    },

    municipio: {
        type: String,
        required: true
    },


    usuarios: {
        type: Object
    },

    logo: {
        type: String
    },

    celular_1:{
        type: Number
    }, 
    
    celular_2:{
        type: Number
    },

    correo_1: {
        type: String
    },

    correo_2: {
        type: String
    },
    
    entidad: {
        type: String
    }


}, {
    versionKey: false,
    timestamps: true
})

export default model('Proyect', proyectSchema)