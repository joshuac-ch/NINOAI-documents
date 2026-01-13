import { userlib } from "@/lib/user";
import { Bell, EyeClosed, MessageCircleMoreIcon } from "lucide-react";
import MenuBar from "./MenuBar";

export default function Header() {    
  return (
    <div className="my-2 flex fex-row bg-white/50 items-center w-full  rounded-md p-2 justify-between">
        <div className="flex flex-row items-center gap-2">
            <EyeClosed  className="h-7 w-7"/>
            <p className="text-2xl">NinoView</p>
        </div>
        <div className="flex flex-row items-center gap-2">
            <div className="">
                <Bell className="h-7 w-7"></Bell>
            </div>
            <div >
                <MessageCircleMoreIcon className="h-7 w-7"></MessageCircleMoreIcon>
            </div>
            <div className="">
                <MenuBar icon={userlib.profile}></MenuBar>
                
            </div>
        </div>
    </div>
  )
}
