# Overview

This project is a note-taking web application that allows users to add, edit, and delete notes after authentication. The application is built using React and React Router for rendering components and managing routes, respectively. Bootstrap is used for styling, and context API is used for state management.

The main components of the application are the Navbar, Home, Notes, AddNote, NoteItem, Alert, Login, Signup and About. 

Navbar component : this provides navigation links and a logout button if the user is authenticated. 

Home component : This is a React functional component named Home that renders a child component <Notes> with the prop showAlert passed to it.

Notes component : This is a React functional component that displays a list of notes. It imports several hooks and components from React and other modules. It also imports a note context that provides the notes to be displayed. It renders a list of NoteItem components and an AddNote component. It also renders a modal that allows the user to edit a note. When a note is edited, it updates the note in the context and displays a success or warning alert. Finally, if there are no notes to display, it shows a message indicating so.

Login component : This is a React component for a login form. It uses the useState hook to manage user credentials (email and password), and the useNavigate hook from the react-router-dom library to navigate to other pages. When the user submits the form, the component sends a POST request to a local API endpoint to authenticate the user. If the response is successful, it saves an auth token to local storage and redirects to the home page. If not, it displays an error message.

Signup component : This is a React component for a sign-up form. It uses hooks such as useState and useNavigate to manage state and navigate to different pages. When the form is submitted, it sends a POST request to the server to create a new user account. It also includes client-side form validation to ensure required fields are filled in and that the password and confirm password fields match. If there are any errors, they are displayed to the user using Bootstrap's is-invalid class. If the account is created successfully, the user is redirected to the home page and a success alert is displayed. If the account already exists, the user is redirected to the login page and an error alert is displayed.

Finally, the noteContext provides the notes state and functions for adding, updating, and deleting notes. The utils file defines the fetchWithToken function, which sends authenticated requests to the backend API.

Overall, this is functional note-taking application that implements basic authentication and CRUD (Create, Read, Update, Delete) functionality.

# Concepts

Context API : Context API is a feature in React that allows data to be passed down  the coponents tree without having to pass it explicitly through each component. It provides a way to share data between components without the need for props drilling means passing data down through multiple levels of components.
Context API allows the creation of a centralized store of data (known as a "context"), which can then be accessed by any component that needs it. This data can include things like user authentication status, theme settings, or any other global data that needs to be shared across the application.

useNavigate hook : The useNavigate hook is a built-in hook in React Router v6 that provides a way to programmatically navigate to different pages or routes in a React application.

useLocation hook : The useLocation hook is a built-in hook in the react-router-dom library that returns the current location object. The location object contains information about the current URL, such as the pathname, search query, and hash. we can access the path by using "location.pathname".

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
