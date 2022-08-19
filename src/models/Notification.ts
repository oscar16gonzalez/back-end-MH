import {Schema, model, Document} from 'mongoose'

const notificationSchema = new Schema({
    nombre_envia: {
        type: String,
    },

    nombre_recibe: {
        type: String,
    },

    mensaje: {
        type: String,
    },

    asunto: {
        type: String,
    },

    id_envia: {
        type: String,
    },

    id_recibe: {
        type: String,
    },

    correo_recibe: {
        type: String,
    },

    correo_envia: {
        type: String,
    },

    estado: {
        type: String,
    },

    celular_recibe: {
        type: String,
    }

}, {
    versionKey: false,
    timestamps: true
})

export default model('Notification', notificationSchema)