import { Bell, MessageCircleMoreIcon } from "lucide-react";

export default function Header() {
  return (
    <div className="my-2 flex fex-row items-center w-full bg-white/20 rounded-md p-2 justify-between">
        <div className="">
            <p>NinoINFOJOBS</p>
        </div>
        <div className="flex flex-row items-center gap-2">
            <div className="">
                <Bell></Bell>
            </div>
            <div className="">
                <MessageCircleMoreIcon></MessageCircleMoreIcon>
            </div>
            <div className="">
                <img src="https://i.pinimg.com/736x/53/b9/1e/53b91efafe1b8e2ce675859c40717234.jpg" 
                className="w-8 h-8 rounded-full" alt="fotouser" />
            </div>
        </div>
    </div>
  )
}
