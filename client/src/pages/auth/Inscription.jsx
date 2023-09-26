import React, { useState } from "react";
import "./inscription.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Inscription() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:4000/auth/login");
      navigate("/login");
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>email</label>
        <input
          type="email"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label>password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <label>phone</label>
        <input
          type="text"
          name="phone"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <div>
          <button type="submit">ENRIGESTRER</button>
        </div>
      </form>
    </>
  );
}

export default Inscription;
