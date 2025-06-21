"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
let myEmail = "sadamshah083@gmail.com";
let myPassword = "12345678";
const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("LoggedIn");
    if (isLoggedIn) {
      router.push("/dashboard");
    }
  }, [router]);
  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e: any) => {
    e.preventDefault();
    if (email === myEmail && password === myPassword) {
      //setIsLoggedIn(true);
      localStorage.setItem("LoggedIn", "true");
      router.push("/dashboard");
    } else {
      alert("Login Failed");
    }
  };

  return (
    <div>
      <div className="h-[20vh]"></div>
      <div className="flex-col flex items-center mx-auto bg-sky-500 w-[25vw] h-[70vh] border-1 gap-3 pt-5">
        <div className="flex-col flex ">
          <label htmlFor="">Email Password</label>
          <input
            type="email"
            placeholder="Enter your Email"
            className="border-2 w-50"
            value={email}
            onChange={handleEmail}
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="border-2 w-50"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <div className="flex-col flex items-start">
          <button
            className="rounded bg-blue-500 p-2 w-25"
            onClick={handleLogin}
          >
            login
          </button>
          <button>forgot Password?</button>
        </div>
        <p>
          Don't have any account <button>Register</button>
        </p>
      </div>
    </div>
  );
};

export default page;
