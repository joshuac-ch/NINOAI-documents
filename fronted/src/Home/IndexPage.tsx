import { Button } from "@/components/ui/button";
import { axiosInstance } from "@/lib/axios";
import { userlib } from "@/lib/user";
import { Upload } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";


export default function IndexPage() {
  const fileref=useRef<HTMLInputElement>(null)
  const [objetdoc, setobjetdoc] = useState(null)
  const [fileDocument, setfileDocumen] = useState<File|null>(null)
  const UploadDocument=async()=>{
    try{
      if(!fileDocument){
        return toast.message("Por favor seleccionar un archivo")
      }
       const formData=new FormData()
      //formData.append("user",userlib.username)
      formData.append("file",fileDocument)
      const acces=localStorage.getItem("access")      
      const res=await axiosInstance.post("/documentos/upload/",formData,{
        
        headers:{
          Authorization:`Bearer ${acces}`,
          "Content-Type":"multipart/form-data"
        }
      })
      console.log(res.data.answer)
    toast.message("Se subio exitosamente")
    }catch(err){
      console.error(err)
      toast.error("Hubo un error")
    }
  }
  const OnchangeFile=(file)=>{
    let doc=file.target.files[0]
    let url=URL.createObjectURL(doc)
    if(doc){
      setfileDocumen(doc)
      setobjetdoc(url)
      UploadDocument()
    }else{
      console.log("no se encontro el documento")
    }
    
    
  }
  const [getDocuments, setgetDocuments] = useState([])
  const GetDocuments=async()=>{
    try{
       const acces=localStorage.getItem("access")
      const {data}=await axiosInstance.get(`/documentos/getall/`,{
        headers:{
          Authorization:`Bearer ${acces}`
        }
      })
      setgetDocuments(data)
      console.log(data)
    }catch(err){
      console.error(err.message)
    }
  } 
  useEffect(()=>{
    GetDocuments()
  },[])
  return (
    <>
    <div className="flex flex-col  h-full  rounded-md">
     <div className="flex flex-row justify-between items-center">
       <div className="">
        <p className="text-3xl">Mis Documentos</p>
        <p className="text-2xl">Bienvenido de nuevo, {userlib.username}</p>
        <p className="text-[15px]">Aqui puedes gestionar tus documentos y proyectos</p>
      </div>
      <div className="">
        <div className="hidden">
          <input type="file" ref={fileref} onChange={(e)=>OnchangeFile(e)} name="" id="" />
        </div>
        <Button onClick={()=>fileref.current?.click()} >
          <div className="flex flex-row gap-2 items-center">
            <Upload></Upload>
            <p>Subir Documento</p>
          </div>
        </Button>
        {objetdoc&&
        (
          <div className="">
            <img src={objetdoc} className="w-10 h-10" alt="" />
          </div>
        )}
      </div>
     </div>
     <div className="pt-8 flex flex-row flex-wrap gap-4">
        {getDocuments.map((d)=>{
          return(
            <div key={d.id} className="">
              <div className="" style={{overflow:"hidden"}}>
               <embed
                src={d.file_url}
                type="application/pdf"
                width="200px"
                height="240px"
                className="rounded-md overflow-y-hidden"
              />

              </div>
              <div className="">
                <p>{d.created_at?new Date(d.created_at).toLocaleString():""}</p>
                <p>Tipo: {d.file_type}</p>
              </div>
            </div>
          )
        })}    
      </div>   
    </div>
    
    </>
  )
}
