import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";
const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <>
      {isAuthenticated ? (
        <div>
          <h2>{user.name}</h2>
          <img src={user.picture} alt={user.name} />
          <JSONPretty data={user} />
        </div>
      ) : (
        <>
          <h3>User is not Logged in!!!!!!</h3>
          <h3>Click on Login button </h3>
        </>
      )}
    </>
  );
};

export default Profile;
