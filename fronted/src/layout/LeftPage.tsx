
import Header from "@/Home/Components/Header";
import { userlib } from "@/lib/user";
import { File, LogOut, Settings, Star } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import { Toaster } from "sonner";

export default function LeftPage() {
  return (
    <>
    <div className="">
        <Toaster></Toaster>
    </div>
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
                <Link to={"/home"}>
                <p>Documentos</p>
                </Link>
            </div>
        </div>
        <div className="flex flex-row gap-2 py-2">
            <div className="">
                <Star />
            </div>
            <div className="">
                <Link to={"/favorite"}>
                <p>Favoritos</p>
                </Link>
            </div>
        </div>
        <div className="flex flex-row gap-2 py-2">
            <div className="">
                <Settings />
            </div>
            <div className="flex flex-row gap-2">
                <Link to={"/settings"}>
                <p>Cuenta</p>
                </Link>
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
