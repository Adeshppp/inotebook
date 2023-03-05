import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Login = (props) => {
    // state to store user input (email and password)
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    // state to store form validation errors
    const [formErrors, setFormErrors] = useState({});
    // get the navigate function from react-router-dom to redirect to other pages
    const navigate = useNavigate();
  
    // function to handle form submission
    const handleOnClick = async (e) => {
      e.preventDefault();
      // send a POST request to the server with user's email and password
      const response = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: credentials.email, password: credentials.password }),
      });
      const json = await response.json();
      console.log(json);
      // if the server returns a success message, store the auth token and redirect to the home page
      if (json.success) {
        localStorage.setItem('token', json.authToken);
        props.showAlert('Logged in successfully!', 'success');
        navigate('/');
      } else {
        // if the server returns an error message, reset the email and password fields and show an error message
        setCredentials({ email: '', password: '' });
        props.showAlert('Invalid credentials!', 'danger');
      }
    };
  
    // function to handle changes in the email and password fields
    const handleOnChange = (e) => {
      // clear any previous validation errors for the field being updated
      setFormErrors({ ...formErrors, [e.target.name]: '' });
      // update the corresponding field in the credentials state with the new value
      setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
  
    // function to validate user input before submitting the form
    const validateForm = () => {
      let errors = {};
      if (!credentials.email.trim()) {
        errors.email = 'Email is required';
      }
      if (!credentials.password.trim()) {
        errors.password = 'Password is required';
      }
      return errors;
    };
  
    // function to handle form submission
    const handleOnSubmit = (e) => {
      e.preventDefault();
      // validate the user input
      const errors = validateForm();
      // if there are errors, display them and do not submit the form
      if (Object.keys(errors).length > 0) {
        setFormErrors(errors);
      } else {
        // if there are no errors, submit the form
        handleOnClick(e);
      }
    };

    return (
        <div className="container mt-5">
            <h2>Continue to login your account</h2>
            <div className="mt-3">
        <form onSubmit={handleOnSubmit}>
            <div className="form-group my-3">
                <label className="my-1" htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" value={credentials.email} onChange={handleOnChange} name="email" aria-describedby="emailHelp" placeholder="Enter email" required/>
                {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
            </div>
            <div className="form-group my-3">
                <label className="my-1" htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" value={credentials.password} onChange={handleOnChange} name="password" placeholder="Password" required/>
                {formErrors.email && <div className="invalid-feedback">{formErrors.password}</div>}
            </div>

            <button type="submit" className="btn btn-primary" >Submit</button>
        </form>
        </div>
        </div>
    )
}

export default Login