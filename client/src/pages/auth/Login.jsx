import React, { useState } from "react";
import "./login.css";
import LoginForm from "../../component/LoginForm";

function Login() {
  const [first, setFirst] = useState("25-09-2023");
  const [user, setUser] = useState("goodbye");
  return (
    <div>
      voici la page de login
      <LoginForm user={user} />
    </div>
  );
}

export default Login;
