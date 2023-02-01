import mongoose from 'mongoose'
import config from './config'

(async() => {
    try {
        const db = await mongoose.connect(config.mongodbURL)
        console.log('Database is connected to:', db.connection.name);
    } catch (error) {
        console.error(error);
    }
})();

//const mongoose = require('mongoose')

// const url = `mongodb+srv://Oscar:bFDw14YKtKYo71Ht@clusterafilicionesmh.hlx6v9k.mongodb.net/?retryWrites=true&w=majority⁄`;
// const url = `mongodb+srv://Oscar:bFDw14YKtKYo71Ht@clusterafilicionesmh.hlx6v9k.mongodb.net/?retryWrites=true&w=majority`;
// const connectionParams = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
    
// }
// mongoose.connect(url, connectionParams)
//     .then(() => {
//         console.log('Connected to the database ')
//     })
//     .catch((err: any) => {
//         console.error(`Error connecting to the database. n${err}`);
//     })
