const express = require('express');
const { Pool } = require('pg');
const { user, host, database, password } = require('pg/lib/defaults');
// const cors = require('cors');

const app = express();
const port = 3001;

const cors = require('cors');

app.use(cors({
    origin: 'http://127.0.0.1:5500', // Allow your frontend origin
}));

const pool = new Pool(
    {
        user: 'postgres',
        host: 'localhost',
        database: 'test4',
        password: 'thebest867',
        port: 5432,
    }
);

app.get('/api/headers', async (req, res) => {
    const result = await pool.query('SELECT * FROM headers');
    res.json(result.rows[0]);
})

app.get('/api/images', async (req, res) => {
    const result = await pool.query('SELECT * FROM images');
    res.json(result.rows);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})