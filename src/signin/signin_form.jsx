import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./sign.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const navigate = useNavigate();

  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <div className="absolute top-60 left-44">
        <div className="font-bold text-4xl">Sign in to</div>
        <br />
        <div className="font-semibold text-2xl">Lorem Ipsum is simply</div>
        <div className="py-10 font-medium text-l">
          If you dont have an account register
        </div>
        <div>{/* You can <Link>Register !</Link> */}</div>
        <div>
          <img
            src="/Rectangle2.png"
            alt="logo1"
            className="absolute top-30 left-44"
          />
        </div>
      </div>
      <div>
        <form>
          <label className=" c1 absolute font-semibold text-2xl">Signin</label>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email or user name"
              value={email}
              className="s1 placeholder-gray-400 px-8"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              value={password}
              className="s2 placeholder-gray-400 px-8"
            />
          </div>
          <br />
          <div className="c4">
            <a href="/">Forgot password</a>
          </div>
          <button type="submit" className="s3">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Signin;
