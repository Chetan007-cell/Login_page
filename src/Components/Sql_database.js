import React, { useState } from "react";
import { Route,Routes } from "react-router-dom";

const Check=()=>{ 
    const [id,setId]=useState('');
    const [password,setPassword]=useState('');
    const [result,setResult]=useState('');

    const func1 = async (id, pass) => {
        if (id!='' && password!=''){
          const response = await fetch('http://localhost:5000/push', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, password: pass }),
          });
      
            const data = await response.json();
            setResult(JSON.stringify(data));
        }

        else{
            setResult('Please enter id and password.');
        }
    };

    const func2 = async (id, pass)=>{
        if (id!='' && pass!=''){
            const response=await fetch('http://localhost:5000/pull',{
                method : 'POST',
                headers:{
                    'Content-Type' : 'application/json',
                },
                body : JSON.stringify({id,password:pass}),
            });

            const data = await response.json();
            setResult(JSON.stringify(data));
            console.log(data);
        }

        else{
            setResult('Enter Id and Password');
        }
    };

    const func3=async ()=>{
        const response=await fetch('http://localhost:5000/all',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
        });

        if (!response.ok){
            setResult('Error found');
        }

        const data=await response.json();

        setResult(JSON.stringify(data));
    }

    const func4 = async(id,pass)=>{
        if (id!='' && password!=''){
        const response=await fetch('http://localhost:5000/del',{
        method: 'POST',
        headers:{'Content-Type': 'application/json',},
        body : JSON.stringify({id,password:pass}),
        });

        const data = await response.json();

        setResult(JSON.stringify(data));
    }

    else{
        setResult('Enter Id and Password');
    }
    };

    return (
        <div>

            <input 
            type="text"
            name="id"
            placeholder="Name"
            value={id}
            onChange={(e)=>{
                setId(e.target.value)
            }}
            />

            <input 
            type="text"
            name="id"
            placeholder="Surname"
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            />

            <button type="button" onClick={() => func1(id, password)}>Push</button>

            <button type="button" onClick={() => func2(id, password)}>Pull</button>

            <button type="button" onClick={()=>func3()}>All Data</button>

            <button type="button" onClick={() => func4(id, password)}>Delete</button>

            <br></br>
            <div >{result}</div>
        </div>
    )
}

export default Check;