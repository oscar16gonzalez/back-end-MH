import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

//Este modulo se encarga de subir los archivos a la carpeta upload

const storage = multer.diskStorage({
    destination: 'uploads',
    filename:(req, file, cb) => {
        const ext = file.originalname.split('.').pop()
        const fileName = Date.now()

        cb(null, `${fileName}.${ext}`)
    } 
});

export default multer({storage});