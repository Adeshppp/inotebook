import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Login = (props) => {
    const [credentials, setCredentials] = useState({email:"", password:""})
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8000/api/auth/login", {
            //localhost:8000/api/notes/fetchallnotes
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({ email:credentials.email,password:credentials.password }), // body data type must match "Content-Type" header

        });
        const json= await response.json()
        console.log(json);
        if(json.success){
            // save auth token and redirect
            localStorage.setItem('token', json.authToken);
            navigate("/");
            props.showAlert("Loggedin Successfully!","success");
        }
        else{
            setCredentials({email:"", password:""})
            props.showAlert("Invalid Credentials!","danger");
        }
    }

    const handleOnChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })//changing event should set its value
      }

    return (
        <div className="container">
        <form>
            <div className="form-group my-3">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" value={credentials.email} onChange={handleOnChange} name="email" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="form-group my-3">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" value={credentials.password} onChange={handleOnChange} name="password" placeholder="Password" />
            </div>

            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </form>
        </div>
    )
}

export default Login