import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";



// rafce

const About = () => {
  const a = useContext(noteContext);
  useEffect(() => {
    a.update()
  }, [])
  
  return <div className="mx-3">About {a.state.name} and he is in class {a.state.class}</div>;
}

export default About


// rafc
// export const About = () => {
//   const a = useContext(noteContext);

//   return <div>About{a.name}</div>;
// };
