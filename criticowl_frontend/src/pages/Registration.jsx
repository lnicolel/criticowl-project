import React from "react";
import Logo from "../components/Logo/Logo";
import Input from "../components/Input/Input";
import PasswordInput from "../components/Input/PasswordInput";
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";

function Registration() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [repeatPassword, setRepeatPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          confirm_password: repeatPassword,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Registration failed!");
      }

      alert("Registration successful!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="flex flex-col gap-16 max-w-[700px] w-full">
        <div className="self-center flex items-center flex-col gap-6">
          <Logo />
          <p>
            <span className="text-2xl">Sign up!</span>
          </p>
        </div>
        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <Input
            name="name"
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            name="email"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <PasswordInput
            name="password"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <PasswordInput
            name="repeat-password"
            type="password"
            placeholder="Repeat password"
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
          {error && <p className="text-white text-xl">{error}</p>}
          <Button
            disabled={password !== repeatPassword}
            className="w-full py-6 bg-[#064789] mt-4"
            type="submit"
          >
            SIGN UP
          </Button>
          <p className="text-xl flex gap-2 justify-center">
            <span>Already have an account?</span>
            <Link to="/" className="text-[#064789]">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Registration;
