import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Links from "./Links";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About bio="i am a full stack developer"></About>
    </div>
  );
}

export default App;
