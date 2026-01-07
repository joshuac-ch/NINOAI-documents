import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { axiosInstance } from "@/lib/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
            navegar("/home")
        }catch(err){
            toast.error("Usuario no autorizado")
            console.error(err)
        }
    }
  return (
    <div className="flex h-full min-w-screen items-center bg-indigo-100 justify-center">
        <div className="flex flex-col bg-white p-4 rounded-md">
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
        <div className="mt-4">
            <Button onClick={OnSubmitLogin}>Enviar datos</Button>
        </div>
        </div>
    </div>
  )
}
