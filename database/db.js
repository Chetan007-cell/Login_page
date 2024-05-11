const mysql=require('mysql');
const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');

const app=express();

const con = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'Chetan@007',
  database:'chetan'
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

app.post('/login',(req,res)=>{
  console.log(req.body);
  const name=req.body.id;
  const surname=req.body.password;

  con.query(`select * from login where id=? and password=?`,[name,surname],(err,data)=>{
    if (data.length>0){
      res.send(JSON.stringify(`Welcome ${name}`));
    }

    else{
      res.send(JSON.stringify('Invalid Id or Password'));
    }
  })
});

app.listen(5000,()=>{
  console.log('connected');
});