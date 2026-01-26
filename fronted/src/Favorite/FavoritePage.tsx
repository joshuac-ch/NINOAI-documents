import { Button } from "@/components/ui/button"
import { Menubar, MenubarContent, MenubarGroup, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"
import { axiosInstance } from "@/lib/axios"
import { Ellipsis, Star } from "lucide-react"
import { useEffect, useState } from "react"
export default function FavoritePage() {
  const refresh=localStorage.getItem('access')
  const [isloading, setisloading] = useState(false)
  const [datafavorite, setdatafavorite] = useState([])
  const GetStartDocuments=async()=>{
    try{
      setisloading(true)
      const {data}=await axiosInstance.get(`/documents/start/get/`,{headers:{
        Authorization:`Bearer ${refresh}`
      }})
      setdatafavorite(data)
      console.log(data)
    }catch(err){
      console.error(err)
    }finally{
      setisloading(false)
    }
  }
  useEffect(()=>{
    GetStartDocuments()
    
  },[])
  return (
    <>
    <div className="">
        <div className="">
            <h1 className="text-3xl">Favoritos</h1>
        </div>
        <div className="flex flex-row flex-wrap gap-4 mt-4">
          {datafavorite.map((s)=>{
          return(
            <div className="md:w-100 rounded-2xl bg-white p-4" key={s.id}>
              <div className="mb-4 flex flex-row justify-between items-center">
                <p className="font-semibold">¿{s.ask}?</p>
               <div className="p-4">
                <Button variant={'default'}><Star className={`${s.is_start?"text-yellow-200 fill-yellow-200":"bg-transparent"}`}></Star></Button>
                 
               </div>
              </div>
              <div className="md:h-110 overflow-hidden overflow-y-scroll">
                <p className="w-80">{s.text}</p>
              </div>
              <div className="flex flex-row justify-between items-center mt-2">
                <div className="">
                  <p>{s.created_at?new Date(s.created_at).toLocaleString():""}</p>
                </div>
                <div className="">
                <Menubar>
                  <MenubarMenu>
                    <MenubarTrigger><Ellipsis></Ellipsis></MenubarTrigger>
                    <MenubarContent>
                      <MenubarGroup>
                        <MenubarItem>
                          <a href={s.file_url} target="_blank">Descargar</a>
                        </MenubarItem>                        
                      </MenubarGroup>                      
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
                </div>
              </div>
            </div>
          )
        })}
        </div>
    </div>
    </>
  )
}
