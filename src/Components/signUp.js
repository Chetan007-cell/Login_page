import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';

const Signup=()=>{

    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const navi=useNavigate();

    useEffect(()=>{
        const auth=localStorage.getItem('user');

        if (auth){ 
            navi('/');
        }
    })

    const collect_data = async ()=>{

        var result =await fetch('http://localhost:3000/signup',{
            method:'post',
            body:JSON.stringify({name,password}),
            headers:{
                'Content-Type':'application/json'
            },
        });

        result=await result.json();

        console.warn(result);

        localStorage.setItem("user",JSON.stringify(result));

        navi('/');
    };

    return (
        <div className="register">
            <h3>Register</h3>

            <input id ='name' autoComplete="false" className='input-box' value={name} onChange={(x)=>setName(x.target.value)}
            type="text" placeholder="Enter Name"></input>

            <input id='password' autoComplete="false" className='input-box' value={password} onChange={(x)=>setPassword(x.target.value)} 
            type="text" placeholder="Enter Password"></input>

            <button onClick={collect_data} className='signin-btn' type="text">Sign In</button>
        </div>
    );
};

export default Signup;

