import { Schema, model } from 'mongoose';

const authorization = new Schema ({
    codigo: {
        type: Number
    }
}, {
    versionKey: false,
    timestamps: true
})

export default model ('Authorization', authorization)