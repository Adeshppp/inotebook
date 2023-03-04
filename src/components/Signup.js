import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = ({ }) => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })

    let navigate = useNavigate();
    const handleOnClick = async (e) => {
        e.preventDefault();
        const { name, email, password } = credentials;
        const response = await fetch("http://localhost:8000/api/auth/createuser", {
            //localhost:8000/api/notes/fetchallnotes
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",

                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password }), // body data type must match "Content-Type" header

        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            localStorage.setItem('token', json.authToken);
            navigate('/');
        }
        else {
            navigate('/login')
            alert("Invalid Credentials! Email already exist")
        }
    }

    const handleOnChange = (e) => setCredentials({ ...credentials, [e.target.name]: e.target.value })//changing event should set its value


    return (
        <div className="container">
            <form>
                <div className="form-group my-3">
                    <label htmlFor="name">Name</label>
                    <input type="name" className="form-control" name="name" id="name" value={credentials.name} onChange={handleOnChange} placeholder="Enter Name" />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" name="email" id="email" value={credentials.email} onChange={handleOnChange} aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" id="password" value={credentials.password} onChange={handleOnChange} placeholder="Password" />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="cpassword">Confirm Password</label>
                    <input type="password" className="form-control" name="cpassword" id="cpassword" value={credentials.cpassword} onChange={handleOnChange} placeholder="Confirm Password" />
                </div>
                {credentials.password && credentials.cpassword && credentials.password === credentials.cpassword ? (
                    <p>Passwords match!</p>
                ) : (
                    <p>Passwords do not match.</p>
                )}


                <button type="submit" onClick={handleOnClick} className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup