import express from 'express'
import fetchData from './utils/db.js'
import { APP_PORT, APP_HOST } from './constants/app.constants.js'
import { bookRoutes } from './routes/book.routes.js'
import { userRoutes } from './routes/user.routes.js'
import { authRouter } from './routes/auth.routes.js'

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()

app.set('views', __dirname + '/views');
app.set("view engine", "ejs");

app.use('/books', bookRoutes)
app.use('/users', userRoutes)
app.use('/auth', authRouter)

app.get('/', async (req, res) => {
    try {
        const result = await fetchData('SELECT * FROM students');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(APP_PORT, APP_HOST, () => {
    console.log(`Server ${APP_PORT}-portda ishga tushdi...`)
})