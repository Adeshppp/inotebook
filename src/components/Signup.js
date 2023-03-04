


import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = (props) => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
    const [formErrors, setFormErrors] = useState({})

    let navigate = useNavigate();
    const handleOnClick = async (e) => {
        e.preventDefault();
        const { name, email, password } = credentials;
        
        const response = await fetch("http://localhost:8000/api/auth/createuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
        });
        const clonedResponse = response.clone();// Clone the response object
        const json = await response.json();// Read the response body from the original response object
        console.log(json);
        if (json.success) {
            localStorage.setItem('token', json.authToken);
            navigate('/');
            props.showAlert("Account Created Successfully!","success");
        } else{
                const res = await clonedResponse.text();// Read the response body from the cloned response object
                if((res).includes("exists")){
                navigate('/login')
                props.showAlert("Account already exist!","danger");
            }

        }
    }

    const handleOnChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })

        // clear errors for the field being updated
        setFormErrors({ ...formErrors, [e.target.name]: "" })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()

        // validate required fields
        let errors = {}
        if (!credentials.name.trim()) {
            errors.name = "Name is required"
        }
        if (!credentials.email.trim()) {
            errors.email = "Email is required"
        }
        if (!credentials.password.trim()) {
            errors.password = "Password is required"
        }
        if (!credentials.cpassword.trim()) {
            errors.cpassword = "Confirm Password is required"
        }

        // validate password match
        if (credentials.password && credentials.cpassword && credentials.password !== credentials.cpassword) {
            errors.cpassword = "Passwords do not match"
        }

        // set errors and submit form if no errors
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors)
        } else {
            handleOnClick(e)
        }
    }

    return (
        <div className="container">
            <form onSubmit={handleOnSubmit}>
                <div className="form-group my-3">
                    <label htmlFor="name">Name</label>
                    <input type="text" className={`form-control ${formErrors.name ? 'is-invalid' : ''}`} name="name" id="name" value={credentials.name} onChange={handleOnChange} placeholder="Enter Name" required />
                    {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
                </div>
                <div className="form-group my-3">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className={`form-control ${formErrors.email ? 'is-invalid' : ''}`} name="email" id="email" value={credentials.email} onChange={handleOnChange} aria-describedby="emailHelp" placeholder="Enter email" required />
                    {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                </div>
                <div className="form-group my-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" className={`form-control ${formErrors.password ? 'is-invalid' : ''}`} name="password" id="password" value={credentials.password} onChange={handleOnChange} placeholder="Password" required />
                    {formErrors.password && <div className="invalid-feedback">{formErrors.password}</div>}
                </div>


                <div className="form-group my-3">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="password" className={`form-control ${formErrors.cpassword ? 'is-invalid' : ''}`} name="cpassword" id="passcpasswordword" value={credentials.cpassword} onChange={handleOnChange} placeholder="Confirm Password" required />
                    {formErrors.cpassword && <div className="invalid-feedback">{formErrors.cpassword}</div>}
                </div>

                {credentials.password && credentials.cpassword && credentials.password === credentials.cpassword ? (
                    <p>Passwords match!</p>
                ) : (
                    <p>Passwords do not match.</p>
                )}


                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup

