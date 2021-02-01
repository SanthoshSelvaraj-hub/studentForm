const express = require("express");
const connection = require('./database');
const query = require('./query');

var bodyParser = require('body-parser')
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json())
const port = 3000 || process.env.PORT

app.get("/api/students", async (req,res) => {
    const conn = await connection().catch(e => {}) 
    const results = await query(conn, 'SELECT * FROM students').catch(console.log);
    res.json(results);
})

app.post("/api/student", async (req,res) =>{

    //console.log(req.body)
    const { id,name,email,city,state,country,zip,password } = req.body;
    const conn = await connection().catch(e => {});
    const result = await query(conn, "INSERT INTO `students` (id, email, name, password, country, city, state, zip) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [id, email, name, password, country, city, state, zip])
    res.status(200).json({ message: 'ok' });
})


app.listen(port, (req,res)=>{
    console.log("Running at port 3000");
})