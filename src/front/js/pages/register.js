import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/register.css";
import { useState } from "react";

export const Register = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    actions.register(email, password);
  };

  return (
    <div className="text-center mt-5">
      <div className="register-form">
        <h2> Register </h2>{" "}
        <form onSubmit={handleSubmit}>
          <label htmlFor="email"> Email </label>{" "}
          <input
            type="email"
            id="email"
            required
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="password"> Password </label>{" "}
          <input
            type="password"
            id="password"
            required
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit"> Register </button>{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
};
