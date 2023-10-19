import express from 'express';
import router from './Routes/routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';

 import DBConnection from './database/db.js';
import { Login, Register } from './Controoler/User.controller.js';



const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());
app.use('/', router);
app.post("/register",Register)
app.post("/login",Login)

DBConnection();


app.listen(PORT, () => console.log(` your Server is running on PORT ${PORT}`));