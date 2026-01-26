import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { axiosInstance } from "@/lib/axios";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";


export default function RegisterLogin() {
    const [formRegister, setformRegister] = useState({
        email:"",
        password:"",
        username:"",
        first_name:"",
        last_name:""
    })
    const OnSubmit=async()=>{
        console.log(formRegister)
        try{
            const data=await axiosInstance.post(`/register/`,{
                "email":formRegister.email,
                "password":formRegister.password,"username":formRegister.username,
                "first_name":formRegister.first_name,"last_name":formRegister.last_name
            })
            console.log(data)
            toast.message("Se enviaron los datos")
        }catch(err){
            toast.error("Hubo un error")
            console.error(err.message)
        }
    }
  return (
    <>
    <div className="flex flex-col items-center justify-center min-w-screen h-full">
        <div className="m-4 p-4 text-white rounded-md justify-center items-center" style={{backgroundColor:"#151515"}}>
            <div className="mb-2">                
                    <Link to={"/"} className="flex flex-row gap-2">
                        <ArrowLeft></ArrowLeft>
                        <p>Regresar</p>
                    </Link>               
                <h2 className="mt-2">Registro</h2>
            </div>
            <div className="flex flex-col  gap-4">
                <div className="mt-4">
                    <label htmlFor="">First Name</label>
                    <Input placeholder="ingrese su nombre" value={formRegister.first_name} onChange={(e)=>setformRegister({...formRegister,first_name:e.target.value})} ></Input>
                </div>
                <div className="mt-4">
                    <label htmlFor="">Last Name</label>
                    <Input placeholder="ingrese su apellido" value={formRegister.last_name} onChange={(e)=>setformRegister({...formRegister,last_name:e.target.value})}   ></Input>
                </div>
            </div>
            <div className="md:flex mm:flex-row flex-wrap md:gap-4">
                <div className="mt-4">
                    <label htmlFor="">Username</label>
                    <Input placeholder="ingrese su usuario" value={formRegister.username} onChange={(e)=>setformRegister({...formRegister,username:e.target.value})}  ></Input>
                </div>
                <div className="mt-4">
                    <label htmlFor="">Email</label>
                    <Input placeholder="ingrese su correo" value={formRegister.email} onChange={(e)=>setformRegister({...formRegister,email:e.target.value})}></Input>
                </div>
            </div>
            <div className="mt-4">
                <label htmlFor="">Password</label>
                <Input placeholder="ingrese su password" type="password" value={formRegister.password} onChange={(e)=>setformRegister({...formRegister,password:e.target.value})} ></Input>
            </div>
            <div className="mt-4">
                <Button className="bg-blue-500" onClick={OnSubmit}>Registrarse</Button>
            </div>        
        </div>
    </div>
    </>
  )
}
