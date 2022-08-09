import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

//Este modulo se encarga de subir las fotos a la carpeta upload

const storage = multer.diskStorage({
    destination: 'uploads',
    filename:(req, file, cb) => {
        cb(null, uuidv4() + path.extname(file.originalname))
    } 
});

export default multer({storage});