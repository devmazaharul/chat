"use client";

import { basicClient } from "@/action";
import Loading from "@/utils/Spinner";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

export default function page() {
  const signupObject = {
    name: "",
    email: "",
    password: "",
  };

  const [state, setstate] = useState({ ...signupObject });
  const [loading, setloading] = useState(false);

  const handleChange = (name, val) => {
    const value=val.toLowerCase()
    console.log(value)
    setstate({ ...state, [name]: val });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    //validaton
    setloading(true);
    try {
      const { name,email, password } = state;
      if (name=="" || email == "" || password == "") {
        toast.error("All field are required");
        return
      }
      if (password.length > 4) {
        //call api
        const responce = await basicClient.post("/register", {
          ...state,
          name: "Rekha sultana",
        });
        if (responce.status === 200) {
          toast.success(responce.data.message);
        } else {
          throw new Error(responce);
        }
      } else {
        toast.error("Password minimu 6 digit");
        return
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "Response error:");
      } else if (error.request) {
        toast.error(error.message || "Erro occourd");
      } else {
        toast.error("Error occourd");
      }
    } finally {
      setloading(false);
    }
  };

const [passtype, setpasstype] = useState(false)
  function handleShow(){
setpasstype(!passtype)
  }

  return (
    <div className="form">
      <div className="w-fit mx-auto py-4 text-center">
        <h1 className="text-xl font-semibold">Register </h1>
        <p className="text-gray-500">Register your account and use it</p>
      </div>
      <form onSubmit={handlesubmit}>
        <input
          className="w-full rounded-md border py-2 px-3 my-2 outline-none"
          type="text"
          name="name"
          placeholder="Name"
          onChange={(e) => handleChange("name", e.target.value)}
        />
        <input
          className="w-full rounded-md border py-2 px-3 my-2 outline-none"
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => handleChange("email", e.target.value)}
        />
       <div className="flex items-center w-full rounded-md border  my-2 outline-none">
       <input
          className="w-full rounded-md  py-2 px-3  outline-none"
          type={passtype?"text":"password"}
          name="password"
          placeholder="Password"
          onChange={(e) => handleChange("password", e.target.value)}
        />
        <p className="cursor-pointer pr-3 text-gray-600" onClick={handleShow} >{passtype?"hide":"show"}</p>
       </div>
        <button className="primary_btn my-2 w-full mx-auto place-content-center">
          {loading ? <Loading/>: "Register"}
        </button>
      </form>
      <div className="py-3 w-fit mx-auto text-center">
      
        <div className="gap-3 flex">
         Already have an account?
          <Link className="text-blue-600" href={"/login"}>
            
            login?
          </Link>
        </div>

      </div>
    </div>
  );
}
