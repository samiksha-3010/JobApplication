import express from 'express';
import router from './Routes/routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';

 import DBConnection from './database/db.js';



const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());
app.use('/', router);

DBConnection();


app.listen(PORT, () => console.log(` your Server is running on PORT ${PORT}`));