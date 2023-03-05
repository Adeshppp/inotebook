import React from 'react';

const About = () => {
  return (
    <div className="container mt-5">
      <h2>Project Description</h2>
      <div className="my-4">
      <p>This project is a note-taking web application that allows users to add, edit, and delete notes after authentication. The application is built using React and React Router for rendering components and managing routes, respectively. Bootstrap is used for styling, and context API is used for state management.</p>
      <p>The main components of the application are the Navbar, Home, Notes, AddNote, NoteItem, Alert, Login, Signup, and About.</p>
      <p>The Navbar component provides navigation links and a logout button if the user is authenticated.</p>
      <p>The Home component is a React functional component named Home that renders a child component Notes with the prop showAlert passed to it.</p>
      <p>The Notes component displays a list of notes. It imports several hooks and components from React and other modules. It also imports a note context that provides the notes to be displayed. It renders a list of NoteItem components and an AddNote component. It also renders a modal that allows the user to edit a note. When a note is edited, it updates the note in the context and displays a success or warning alert. Finally, if there are no notes to display, it shows a message indicating so.</p>
      <p>The Login component is a React component for a login form. It uses the useState hook to manage user credentials (email and password), and the useNavigate hook from the react-router-dom library to navigate to other pages. When the user submits the form, the component sends a POST request to a local API endpoint to authenticate the user. If the response is successful, it saves an auth token to local storage and redirects to the home page. If not, it displays an error message.</p>
      <p>The Signup component is a React component for a sign-up form. It uses hooks such as useState and useNavigate to manage state and navigate to different pages. When the form is submitted, it sends a POST request to the server to create a new user account. It also includes client-side form validation to ensure required fields are filled in and that the password and confirm password fields match. If there are any errors, they are displayed to the user using Bootstrap's is-invalid class. If the account is created successfully, the user is redirected to the home page and a success alert is displayed. If the account already exists, the user is redirected to the login page and an error alert is displayed.</p>
      <p>Finally, the noteContext provides the notes state and functions for adding, updating, and deleting notes. The utils file defines the fetchWithToken function, which sends authenticated requests to the backend API.</p>
      <p>Overall, this is a functional note-taking application that implements basic authentication and CRUD (Create, Read, Update, Delete) functionality.</p>
    </div>
    </div>
  );
};

export default About;
