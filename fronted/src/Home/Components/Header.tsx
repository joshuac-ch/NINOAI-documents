import { userlib } from "@/lib/user";
import { Bell, EyeClosed, MessageCircleMoreIcon } from "lucide-react";
import MenuBar from "./MenuBar";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

export default function Header() {    
  return (
    <div className="my-2 flex fex-row bg-white/50 items-center w-full  rounded-md p-2 justify-between">
        <div className="flex flex-row items-center gap-2">
            <EyeClosed  className="h-7 w-7"/>
            <p className="text-2xl">NinoView</p>
        </div>
        <div className="flex flex-row items-center gap-2">
            <div className="">                
                <MenuBar Icono={Bell} children={"No hay notificaciones"}></MenuBar>
            </div>
            <div >
                
                <MenuBar Icono={MessageCircleMoreIcon} children={"No hay mensajes"}></MenuBar>
            </div>
            <div className="">
                
                <Menubar className="rounded-full p-0">
                    <MenubarMenu>
                        <MenubarTrigger className="bg-white/50 p-0">
                            <img src={userlib.profile} className="w-10 h-10 rounded-full" alt="" />
                        </MenubarTrigger>
                        <MenubarContent>
                        <MenubarItem>
                            Perfil 
                        </MenubarItem>
                        <MenubarItem>Configurar</MenubarItem>
                        
                        <MenubarItem>Compartir</MenubarItem>
                        
                        <MenubarItem>Cerrar Session</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            </div>
        </div>
    </div>
  )
}
