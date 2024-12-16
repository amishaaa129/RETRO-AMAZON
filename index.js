import express from "express";
import bodyParser from "body-parser";
import path from "path";
import pg from "pg";
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pg;
const app = express();
const port = process.env.PORT || 3000;

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

app.get("/", (req,res) =>{

})

app.post("/", async (req,res) =>{
  const { poll: selectedCategory } = req.body;
    const name = req.body.name; 

    try {
        await pool.query(
            'INSERT INTO poll_votes (name, category) VALUES ($1, $2)',
            [name, selectedCategory]
        );
        res.redirect('/');
    } catch (err) {
        console.error('Error inserting data into the database:', err);
        res.status(500).send('An error occurred');
    }
    });

app.listen(port);