import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button variant="brand" className="btn btn-warning mx-3" onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;