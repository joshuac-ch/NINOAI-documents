import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { axiosInstance } from "@/lib/axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, Toaster } from "sonner";


export default function LoginPage() {
    const navegar=useNavigate()
    const [FormLogin, setFormLogin] = useState({
        email:"",
        pass:""
    })
    const OnSubmitLogin=async()=>{
        try{
            
            const res=await axiosInstance.post("/api/auth/login/",{email:FormLogin.email,password:FormLogin.pass})
            
            localStorage.setItem("access", res.data.access);
            localStorage.setItem("refresh", res.data.refresh);
            const me=await axiosInstance.get("/api/auth/me/",{
                headers:{
                    Authorization:`Bearer ${res.data.access}`
                }
            })
            localStorage.setItem("user",JSON.stringify(me.data))
            navegar("/log/home")
        }catch(err){
            toast.error("Usuario no autorizado")
            console.error(err)
        }
    }
  return (
    <div className="flex h-full min-w-screen items-center bg-indigo-100 justify-center" >
       <div className="lg:w-100 text-md text-white p-4 rounded-md" style={{backgroundColor:"#151515"}}>
        <div className="flex items-center justify-center">
            <img src="https://i.pinimg.com/736x/90/e9/51/90e9517e13addf48bcfdb74b14823bad.jpg" className="rounded-md w-50 h-50" alt="" />
        </div>
         <div className="flex flex-col ">
            <div className="">
                <Toaster></Toaster>
            </div>
            <div className="mt-4">
                <label htmlFor="">Correo</label>
                <Input value={FormLogin.email} placeholder="ingrese su correo" onChange={(e)=>setFormLogin({...FormLogin,email:e.target.value})}></Input>
            </div>
            <div className="mt-4">
                <label htmlFor="">Password</label>
                <Input value={FormLogin.pass} onChange={(e)=>setFormLogin({...FormLogin,pass:e.target.value})} placeholder="ingrese su contraseña"></Input>
            </div>
            <div className="flex flex-row justify-between items-center mt-6">
                <div className="">
                    <Button className="bg-indigo-100 transition-all text-black hover:text-red-900" onClick={OnSubmitLogin}>Iniciar Session</Button>
                </div>
                <div className="">
                    <Link to={"/register"}>Registrarse</Link>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}
