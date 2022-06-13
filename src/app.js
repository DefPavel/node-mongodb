import express, { json, urlencoded } from 'express';
import routes from './routes/index.js';
import mongoose from 'mongoose';
// @ts-ignore
import { config } from 'dotenv';
const app = express();

/**
 * .env
 */
config();
/**
 * port env 
 */
const port = process.env.PORT || 3000;
/**
 * middleware
 */
 app.use(json({ limit: '1mb' }));
 app.use(urlencoded({ limit: '1mb', extended: true }));
 
/**
 * routes
 */
app.use('/', routes); 


 app.post('/apple', (req, res) => {
    console.log(req.body);
    res.send('Hello World!')
})

/**
 * connect database
 */
mongoose.connect(process.env.CONNECTION_STRING);
/**
 * not fount route 
 */
app.use((req, res) => { res.status(404).send('Страница не обнаружена!');});
/**
 *  run port
 */
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});