import express from 'express'
import { APP_PORT, APP_HOST } from './constants/app.constants.js'
import { bookRoutes } from './routes/book.routes.js'
import {userRoutes} from './routes/user.routes.js'

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()

app.set('views', __dirname + '/views');
app.set("view engine", "ejs");

app.use('/books', bookRoutes)
app.use('/users', userRoutes)
app.use('/auth', authRoutes)

app.listen(APP_PORT, APP_HOST, () => {
    console.log(APP_PORT)
    console.log(`Server ${APP_PORT}-portda ishga tushdi...`)
})