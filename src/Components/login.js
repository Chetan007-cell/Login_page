import { useState } from "react";

const Login=()=>{
    const [id,setId]=useState('');
    const [password,setPassword]=useState('');
    const [result,setResult]=useState('');

    const check= async (id,password)=>{

        try{
            if (id && password){
        const response = await fetch('http://localhost:5000/login',{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({id,password}),
        });

        const data = await response.json();
        setResult(JSON.stringify(data));

        console.log(data);
    }

        else{
            setResult('Enter ID and Password');
        }
        }
        catch(error){
            setResult(JSON.stringify(error));
        }
    }

    return (
        <div>
            <h1>Login</h1>

            <input
            type="text"
            placeholder="User Name"
            value={id} 
            onChange={(e)=>{setId(e.target.value)}}
            />

            <input 
            type='text'
            placeholder="Password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            />

            <button 
            type="buton"
            onClick={() => check(id, password)}
            >Login</button>

            <div>{result}</div>
        </div>
    )
};

export default Login;