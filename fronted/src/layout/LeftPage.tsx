import { Button } from "@/components/ui/button";
import Header from "@/Home/Components/Header";
import { userlib } from "@/lib/user";
import { File, LogOut, Settings, Star } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

export default function LeftPage() {
  return (
    <>
   <div className="min-h-screen min-w-screen flex flex-col p-2">
     <div className="w-full">
        <Header></Header>
    </div>
    <div className="flex flex-row">
    <div className="">
   <div className="flex flex-col ">
     <div className="p-4 h-140 bg-white/50 text-gray-500 w-50 rounded-md mb-4">
        <div className="flex flex-row gap-2 items-center">
        <img src={userlib.profile} className="w-10 h-10 rounded-full" alt="" />
        <h2>{userlib.username}</h2>
    </div>
    <div className="mt-4">
        <div className="flex flex-row gap-2 py-2">
            <div className="">
                <File />
            </div>
            <div className="">
                <p>Documentos</p>
            </div>
        </div>
        <div className="flex flex-row gap-2 py-2">
            <div className="">
                <Star />
            </div>
            <div className="">
                <p>Favoritos</p>
            </div>
        </div>
        <div className="flex flex-row gap-2 py-2">
            <div className="">
                <Settings />
            </div>
            <div className="flex flex-row gap-2">
                <p>Cuenta</p>
            </div>
        </div>
       
        <div className="flex flex-row gap-2 py-4 ">
            <div className="">
                <LogOut></LogOut>
            </div>
            <div className="">
                <Link to={"/login"}>
                <p>Cerrar Session</p>
                </Link>
            </div>
        </div>
    </div>
    </div>
   </div>
   <div className="p-4 h-60 bg-white/50 text-gray-500 w-50 rounded-md mb-4">
        <div className="">
            <p>Nesecitas ayuda</p>
        </div>
        <div className="">
            <p>Centro de ayuda </p>
        </div>
   </div>
   </div>
   <main className="flex-1 bg-white/50  rounded-md mx-4 p-4">
    <Outlet></Outlet>
   </main>
   </div>
   </div>
    </>
  )
}
