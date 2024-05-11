//siya var raam chandra ki jai, raam bhakt hanuman ki jai...

const express=require('express');
const bodyParser=require('body-parser');
const mysql=require('mysql');
const cors=require('cors');

const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Chetan@007',
    database:'chetan'
});

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

app.post('/push',(req,res)=>{
    const name=req.body.id;
    const surname=req.body.password;

    const qurr=`insert into login values(?,?)`;

    con.query(qurr,[name,surname],(err,data)=>{
        if (err) throw err;

        else res.send(JSON.stringify('data pushed'));
    })
});

app.post('/pull',(req,res)=>{
    const name=req.body.id;
    const surname=req.body.password;

    con.query(`select * from login where id=? and password=?`,[name,surname],(err,data)=>{
        if (data.length>0){
            res.send(JSON.stringify('Data Present'));
        }

        else{
            res.send(JSON.stringify('Data not Available'));
        }
    })
});

app.post('/all',(req,res)=>{
    con.query(`select * from login`,(err,data)=>{
        res.send(data);
    })
});

app.post('/del',(req,res)=>{
    const name=req.body.id;
    const surname=req.body.password;

    con.query('DELETE FROM login where id=? and password=?',[name,surname],(err,data)=>{

        if (data.affectedRows>0){
            res.send(JSON.stringify('data deleted'));
        }

        else{
            res.send(JSON.stringify('data not present'));
        }
    });
})

app.listen(5000,()=>{
    console.log('port running in 5000');
});