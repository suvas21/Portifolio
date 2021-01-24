import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import customerRoutes from './routes/customers.js';

const app = express();

app.use('/customers', customerRoutes);

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

const CONNECTION_URL = "mongodb://127.0.0.1:27017/newone";

const PORT = process.env.PORT || 4000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology:true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

 

mongoose.set('useFindAndModify', false);