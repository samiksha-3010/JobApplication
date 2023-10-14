import express from 'express';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import router from './routes/routes.js';
// import DBConnection from './database/db.js';



const app = express();
const PORT = process.env.PORT || 8000;

// app.use(cors());
// app.use(bodyParser.json());
// app.use('/', router);

// DBConnection();


app.listen(PORT, () => console.log(` your Server is running on PORT ${PORT}`));