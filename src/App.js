import React from "react";
import "./App.css";
import LoginButon from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import {useAuth0} from '@auth0/auth0-react'
function App() {
  const {isLoading} = useAuth0();
  if(isLoading) return <h3>LOADING USER PROFILE </h3>
  return (
    <div>
      <h1 className="formtitle">DEMO</h1>
      <form className="formcontent">
        <LoginButon />
        <LogoutButton />
      </form>
      <Profile/>
    </div>
  );
}

export default App;
