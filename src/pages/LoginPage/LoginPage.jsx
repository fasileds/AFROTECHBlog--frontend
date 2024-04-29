import React, { useState } from "react";
import "./login.css";
import { Input } from "@mui/base/Input";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";
export default function LoginPage() {
  const { setIsLoggedIn } = useAuth();
  const [islogIn, setIsLogdIn] = useState(false);
  const [formData, setFormData] = useState({
    emaile: "",
    password: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handlOnsubmite = async (e) => {
    e.preventDefault();
    try {
      const responce = await axios.post(
        "http://localhost:3001/api/auth/login",
        formData
      );
      console.log("login sussfull", responce.data);
      setIsLogdIn(true);
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  };
  if (islogIn) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="login">
      <form onSubmit={handlOnsubmite}>
        <Input
          name="emaile"
          value={formData.emaile}
          onChange={handleOnChange}
          placeholder="email ..."
          className="inputs"
        />
        <Input
          name="password"
          onChange={handleOnChange}
          value={formData.password}
          type="password"
          placeholder="password ..."
          className="inputs"
        />
        <button>Log In</button>
      </form>
    </div>
  );
}
