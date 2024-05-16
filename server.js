const mysql = require('mysql2');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();
app.use(bodyParser.json({limit: '10mb'}));
app.use(cors({
    origin: 'http://localhost:3000'
}))

const connection = mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    database:process.env.DATABASE,
    password:process.env.PASSWORD,
    ssl: {
      rejectUnauthorized: false // Set this to true if you have a valid SSL certificate
    }
  });

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ', err);
        return;
    }
    console.log('Connected to the database!');
});

app.get('/api', (req, res) => {
    res.send('From Server');
  });

app.post('/api/orders', (req, res)=>{
    const {work_order_name, reported_issue, job_details} = req.body;
    const sql = 'INSERT INTO work_orders (work_order_name, reported_issue, job_details) VALUES (?, ?, ?)';
    connection.query(sql, [work_order_name, reported_issue, job_details], (err, result) => {
        if(err){
            console.error('Error inserting into the database: ', err);
            res.status(500).json({message: 'Error inserting into the database'});
            return;
        }
        res.status(201).json({message: 'Order added successfully'});
    })
})

app.post('/api/departments', (req, res)=>{
    const {name, telephone, email, floor, department} = req.body;
    const sql = 'INSERT INTO departments (name, telephone, email, floor, department) VALUES (?, ?, ?, ?, ?)';
    connection.query(sql, [name, telephone, email, floor, department], (err, result) => {
        if(err){
            console.error('Error inserting into the database: ', err);
            res.status(500).json({message: 'Error inserting into the database'});
            return;
        }
        res.status(201).json({message: 'Department added successfully'});
    })
})

app.get('/orders', (req, res)=>{
    const sql = 'SELECT * FROM work_orders';
    connection.query(sql, (err, result)=>{
        if(err){
            console.error('Error fetching from the database: ', err);
            res.status(500).json({message: 'Error fetching from the database'});
            return;
        }
        res.status(200).json(result);
    })
})

app.get('/departments', (req, res)=>{
    const sql = 'SELECT * FROM departments';
    connection.query(sql, (err, result)=>{
        if(err){
            console.error('Error fetching from the database: ', err);
            res.status(500).json({message: 'Error fetching from the database'});
            return;
        }
        res.status(200).json(result);
    })

})

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000');
})
