"use client";
import { basicClient } from "@/action";
import Loading from "@/utils/Spinner";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

export default function page() {
  const resetObject = {
    email: "",
  };

  const [state, setstate] = useState({ ...resetObject });
  const [loading, setloading] = useState(false);

  const handleChange = (name, val) => {
    setstate({ ...state, [name]: val });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    //validaton
    setloading(true);
    try {
      const { email } = state;
      if (email == "") {
        toast.error("Email field are required");
        return
      }

      //call api
      const responce = await basicClient.post("/reset", state);
      if (responce.status === 200) {
        toast.success(responce.data.message);
      } else {
        throw new Error(responce);
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "Response error:");
      } else if (error.request) {
        toast.error(error.message || "Erro occourd");
      } else {
        toast.error("Error message:", error.message);
      }
    } finally {
      setloading(false);
    }
  };

  return(
    <div className="form">
      <div className="w-fit mx-auto py-4 text-center">
        <h1 className="text-xl font-semibold">Reset </h1>
        <p className="text-gray-500">
          Reset your password and login your account.
        </p>
      </div>
      <form onSubmit={handlesubmit}>
        <input name="email"
          className="w-full rounded-md border py-2 px-3 my-2 outline-none"
          type="email"
          placeholder="Email"
          onChange={(e) => handleChange("email", e.target.value)}
        />
        <button className="primary_btn my-2 w-full mx-auto place-content-center">
          {loading ?<Loading/> : "Reset"}
        </button>
      </form>
      <div className="py-3 w-fit mx-auto text-center">
        <div className="gap-3 flex">
          I don't have an account{" "}
          <Link className="text-blue-600" href={"/login"}>
            {" "}
            login?
          </Link>
        </div>
      </div>
    </div>
  );
}
