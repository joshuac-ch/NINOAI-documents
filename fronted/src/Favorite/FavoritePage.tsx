import { axiosInstance } from "@/lib/axios"
import { Star } from "lucide-react"
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
            <div className="w-100 h-110 overflow-y-scroll overflow-hidden rounded-2xl bg-white p-4" key={s.id}>
              <div className="mb-4 flex flex-row justify-between items-center">
                <p className="font-semibold">¿{s.ask}?</p>
               <div className="">
                 <Star className={`${s.is_start?"fill-yellow-200":"bg-trarent"}`}></Star>
               </div>
              </div>
              <div className="">
                <p className="w-80">{s.text}</p>
              </div>
            </div>
          )
        })}
        </div>
    </div>
    </>
  )
}
