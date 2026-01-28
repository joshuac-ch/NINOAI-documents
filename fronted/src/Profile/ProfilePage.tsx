import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { axiosInstance } from "@/lib/axios"
import { userlib } from "@/lib/user"
import { useEffect, useState } from "react"
import { toast } from "sonner"


export default function ProfilePage() {
  const [FormUdpateUser, setFormUdpateUser] = useState({
    profile:"",
    first_name:"",
    last_name:"",
    username:""
  })
  const refresh=localStorage.getItem('access')
  const ShowUserID=async(id)=>{
    try{
      const {data}=await axiosInstance.get(`/show/user/${id}/`,{
        headers:{Authorization:`Bearer ${refresh}`}
      })
      
      setFormUdpateUser({...data,
        profile:data.profile,
        first_name:data.first_name,
        last_name:data.last_name,
        username:data.username
      })
    }catch(err){
      console.error(err)
    }
  }
  
  useEffect(()=>{
    if(userlib){
      ShowUserID(userlib.id)
    }
  },[userlib])

  const UpdateUser=async()=>{    
    try{
      await axiosInstance.patch(`/update/user/${userlib.id}/`,FormUdpateUser,{
        headers:{
          Authorization:`Bearer ${refresh}`
        }
      })
      toast.message(`Se actualizo el usuario ${FormUdpateUser.username}`)      
    }catch(err){
      console.error(err)
    }
  }
  
  return (
    <>
    <div className="">
        <div className="flex flex-col items-center mb-4">
          <div className="">
            <h1>Perfil del usuario</h1>
        </div>
        <div className="">
            <img src={FormUdpateUser.profile} className="h-40 w-40 rounded-full" alt="" />
            <p className="mt-2">{userlib.email}</p>
        </div>
        </div>
        <div className="">
          <div className="py-2">
            <label htmlFor="">Nombres</label>
            <Input className="w-full" value={FormUdpateUser.first_name} onChange={(e)=>setFormUdpateUser({...FormUdpateUser,first_name:e.target.value})}></Input>
          </div>
        <div className="py-2">
            <label htmlFor="">Apellidos</label>
            <Input value={FormUdpateUser.last_name} onChange={(e)=>setFormUdpateUser({...FormUdpateUser,last_name:e.target.value})}></Input>
        </div>
        </div>
        <div className="">
          
          <div className="py-2">
            <label htmlFor="">Username</label>
            <Input value={FormUdpateUser.username} onChange={(e)=>setFormUdpateUser({...FormUdpateUser,username:e.target.value})}></Input>
          </div>
        </div>
        <div className="mt-4 text-center">
          <Button onClick={UpdateUser} className="bg-indigo-500">Actualizar</Button>
        </div>
    </div>
    </>
  )
}
