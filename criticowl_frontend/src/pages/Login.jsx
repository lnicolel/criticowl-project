import React from "react";
import Logo from "../components/Logo/Logo";
import Input from "../components/Input/Input";
import PasswordInput from "../components/Input/PasswordInput";
import Button from "../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/api";  // Виправлено шлях

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await loginUser(email, password);
      localStorage.setItem("token", data.token);
      navigate("/app");
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
            <span className="text-2xl">Sign in!</span>
          </p>
        </div>
        <form onSubmit={handleLogin} className="flex text-center flex-col gap-4">
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ resize: 'none', height: '48px', textAlign: 'center' }}
          />
          <PasswordInput
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-white text-xl">{error}</p>}
          <Button className="w-full py-6 bg-[#064789] mt-4" type="submit">
            SIGN IN
          </Button>
          <p className="text-xl flex gap-2 justify-center">
            <span>Don&apos;t have an account?</span>
            <Link to="/signup" className="text-[#064789]">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
