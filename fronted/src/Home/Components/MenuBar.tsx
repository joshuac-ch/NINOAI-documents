import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

export default function MenuBar({Icono,children}) {
  return (
    <Menubar className="bg-transparent rounded-full p-0">
        <MenubarMenu>
            <MenubarTrigger asChild className="bg-white/50 p-0">
                <Icono className="h-7 w-7 text-gray-500 rounded-full"></Icono>                
            </MenubarTrigger>
            <MenubarContent>
            <MenubarItem>
                {children}
            </MenubarItem>
            
            </MenubarContent>
        </MenubarMenu>
    </Menubar>
  )
}
