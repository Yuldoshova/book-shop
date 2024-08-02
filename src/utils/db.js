// import  Pool from 'pkg';
import { query } from 'express';
import pg from 'pg';
const { Pool } = pg

const pool = new Pool({
    user: 'postgres',
    password: 'postgresql',
    host: 'localhost',
    port: 5432,
    database: 'postgres'
});


// module.exports = {
//     query: (text, params) => pool.query(text, params)
// };

const fetchData = async (query) => {
    const client = await pool.connect()
    try {
        const data = await client.query(query)
        console.log(data)
        return data;
    } catch (error) {
        console.log("ERROR❗❗❗" + error.message)
    } finally {
        client.release()
    }
}

export default fetchData