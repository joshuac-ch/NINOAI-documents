import { Button } from "@/components/ui/button";
import { axiosInstance } from "@/lib/axios";
import { userlib } from "@/lib/user";
import { CirclePlus, Download, Ellipsis, Star, Trash2, Upload } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import SearchPage from "./Components/SearchPage";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";


export default function IndexPage() {
  const fileref=useRef<HTMLInputElement>(null)
  const [objetdoc, setobjetdoc] = useState(null)
  const [fileDocument, setfileDocumen] = useState<File|null>(null)
  const acces=localStorage.getItem("access")
  const UploadDocument=async()=>{
    try{
      if(!fileDocument){
        return toast.message("Por favor seleccionar un archivo")
      }
       const formData=new FormData()
      //formData.append("user",userlib.username)
      formData.append("file",fileDocument)
      formData.append("pregunta",inputask)
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
      
    }else{
      console.log("no se encontro el documento")
    }
    
    
  }
  const [getDocuments, setgetDocuments] = useState([])
  const GetDocuments=async()=>{
    try{       
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
  const [inputask, setinputask] = useState("")
  const [selectStart, setselectStart] = useState([])
  const OnchangeStar=(id)=>{
    setselectStart(id)
    }
  
  //---------------
  // star
  //---------------
    const onButtonUpdateFavourite=async(id)=>{
      try{
        const {data}=await axiosInstance.post(`/documentos/${id}/start/`,{},{
          headers:{
          "Authorization":`Bearer ${acces}`
        }})     
        setgetDocuments(prev =>
            prev.map(doc =>
              doc.id === id
                ? { ...doc, is_start: data.is_start }
                : doc
            )
          )
           
      }catch(err){
        toast.error("Hubo un error",err)
      }
    }
    
  return (
    <>
    <div className="flex flex-col  rounded-md">
     <div className="flex flex-row justify-between flex-wrap items-center">
       <div className="">
        <p className="text-3xl">Mis Documentos</p>
        <p className="text-2xl">Bienvenido de nuevo, {userlib.username}</p>
        <p className="text-[15px]">Aqui puedes gestionar tus documentos y proyectos</p>
      </div>
      

      <div className="">
        <Dialog>
        <DialogTrigger className="bg-indigo-500 md:mt-0 mt-4 text-white p-2 rounded-md ">
          <div className="flex flex-row gap-2 items-center cursor-pointer">
            <Upload></Upload>
            <p>Subir Documento</p>
          </div>
        </DialogTrigger>
        <DialogContent>          
            <div className="">
              <div className="flex justify-center">
                <div className="hidden">
                <input type="file" ref={fileref} onChange={(e)=>OnchangeFile(e)} name="" id="" />
              </div>
              <Button onClick={()=>fileref.current?.click()} >
                <div className="flex flex-row gap-2 items-center">
                  <Upload></Upload>
                  <p>Subir Documento</p>
                </div>
              </Button>
              </div>
              {fileDocument&&
              (
                <div className="flex justify-center mt-4 text-green-800">
                  <Label>Documento cargado exitosamente</Label>
                </div>
              )}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="name-1">¿Que buscas en este perfil? *</Label>
              <Input value={inputask} onChange={(e)=>setinputask(e.target.value)}></Input>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant={'outline'}>Cancelar</Button>
              </DialogClose>
              <Button type="submit" onClick={UploadDocument}>Enviar Peticion</Button>
            </DialogFooter>
          
          
        </DialogContent>
      </Dialog>
      </div>
     </div>
     <div className="py-4">
        <SearchPage></SearchPage>
      </div>
     <div className="pt-8 flex flex-row flex-wrap gap-4">
        {getDocuments.map((d)=>{
          return(
            <div key={d.id} className="bg-white px-4 rounded-md">
              <div className="py-4 flex flex-row justify-between items-center">
                <p className="bg-red-400 text-white px-6 py-2 rounded-full">{d.file_type.toUpperCase()}</p>
                
                <Button variant={'default'} onClick={()=>onButtonUpdateFavourite(d.id)}>
                  <Star className={`${d.is_start?"text-yellow-200 fill-yellow-200":"bg-transparent"}`}></Star>
                </Button>
              </div>
              <div className="flex md:w-70 flex-wrap overflow-hidden md:h-50">
               {/*
               pdf no nesesario
               <embed
                src={d.file_url}
                type="application/pdf"
                width="200px"
                height="240px"
                className="rounded-md overflow-y-hidden"
              />
               */}
              <p className="font-bold text-xl mb-4">¿{d.ask}?</p>
              <p style={{whiteSpace:"pre-line"}} className="w-full max-h-30 overflow-y-auto">{d.text}</p>
              </div>
              <div className="flex flex-row justify-between items-center py-4">
                <p>{d.created_at?new Date(d.created_at).toLocaleString():""}</p>
                <div className="">
                  <Menubar>
                  <MenubarMenu>
                    <MenubarTrigger><Ellipsis></Ellipsis></MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>
                        <Download></Download>
                        <a href={d.file_url} target='_blank'>Descargar</a>  
                      </MenubarItem>
                      <MenubarItem>
                        <Trash2></Trash2>
                        <p>Eliminar</p>
                      </MenubarItem>                      
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
