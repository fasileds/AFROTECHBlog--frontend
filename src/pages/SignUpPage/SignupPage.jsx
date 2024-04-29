import React, { useState } from "react";
import "./signup.css";
import { Input } from "@mui/base/Input";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default function SignupPage() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    emaile: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleOnSubmite = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/signup",
        formData
      );
      console.log("register sussfule", response.data);
      setIsRegistered(true);
    } catch (error) {
      console.log(error);
    }
  };
  if (isRegistered) {
    return <Navigate to="/Login" replace />;
  }
  return (
    <div className="signup">
      <form onSubmit={handleOnSubmite}>
        <Input
          name="name"
          onChange={handleChange}
          value={formData.name}
          placeholder="user name ..."
          className="inputs"
        />
        <Input
          name="emaile"
          value={formData.emaile}
          type="email"
          placeholder="email ..."
          className="inputs"
          onChange={handleChange}
        />
        <Input
          onChange={handleChange}
          name="password"
          value={formData.password}
          type="password"
          placeholder="password ..."
          className="inputs"
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
