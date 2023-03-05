import React from 'react'

//This is a functional component named Alert that accepts props
const Alert = (props) => {

  // This is a helper function that takes a word and returns it with its first letter capitalized
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  
  // This component returns a div with an alert class and style attributes based on the props it receives
  return (
    // The && operator checks if props.alert exists before rendering the div
    props.alert && 
    <div 
      className={`alert alert-${props.alert.type}`} 
      style={{ 
        position: "fixed", 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 999 
      }} 
      role="alert"
    >
      <strong>{capitalize(props.alert.msg)}</strong>
    </div>
  )
}

// This component is exported as the default export of this module
export default Alert
