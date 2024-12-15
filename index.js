import express from "express";
import bodyParser from "body-parser";
import path from "path";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "retro-amazon",
  password: "strangert3",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

app.get("/", (req,res) =>{

})

app.post("/", async (req,res) =>{
  const name=req.body.name;
  const selectedCategory = req.body.poll; // Get the selected category from the form

    // Insert the selected category into the PostgreSQL database
    await db.query("INSERT INTO poll_votes (name,category) VALUES ($1,$2)",[name,selectedCategory]);
    res.redirect("/");
    });

app.listen(port);