"use client"
import { basicClient } from "@/action"
import Link from "next/link"
import { useState } from "react"
import toast from "react-hot-toast"
import Loading from "@/utils/Spinner";

export default function page() {

    const loginObject={
        email:"",
        password:""
    }

    const [state, setstate] = useState({...loginObject})
    const [loading, setloading] = useState(false)

    const handleChange=(name,val)=>{
        setstate({...state,[name]:val})
    }
    const handlesubmit=async(e)=>{
        e.preventDefault()
        //validaton 
setloading(true)
       try {
        const {email,password}=state
        if(email=="" || password==""){
            toast.error("All field are required")
            return
        }
        if(password.length>4){
                 //call api
                 const responce=await basicClient.post("/login",state)
                 if(responce.status===200){
                   toast.success(responce.data.message)
                 }else{
                    throw new Error(responce)
                 }
        }else{
            toast.error("Password minimu 6 digit")
            return
        }
       } catch (error) {
        if (error.response) {
            toast.error(error.response.data.message || 'Response error:');
        } else if (error.request) {
          
          toast.error(error.message || "Erro occourd");
        } else {
          toast.error('Error message:', error.message);
        }
       }finally{
        setloading(false)
       }
     

    }

  return (
    <div className="form">
        <div className="w-fit mx-auto py-4 text-center">
            <h1 className="text-xl font-semibold">Login </h1>
            <p className="text-gray-500">Login your account and enjoy it</p>    
        </div>
        <form onSubmit={handlesubmit}>
            <input className="w-full rounded-md border py-2 px-3 my-2 outline-none" type="email" placeholder="Email" onChange={(e)=>handleChange("email",e.target.value)} />
            <input className="w-full rounded-md border py-2 px-3 my-2 outline-none" type="password" placeholder="Password" onChange={(e)=>handleChange("password",e.target.value)} />
       <button className="primary_btn my-2 w-full mx-auto place-content-center">{loading?<Loading/>:"Login"}</button>
        </form>
        <div className="py-3 w-fit mx-auto text-center">
            <Link className="text-blue-800" href={'/reset'}>Reset password?</Link>
           <div className="gap-3 flex">I don't have an account <Link className="text-blue-600" href={'/register'}> Register?</Link></div>
        </div>
      
    </div>
  )
}
