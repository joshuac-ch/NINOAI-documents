import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menubar, MenubarContent, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@/components/ui/menubar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MenubarItem } from "@radix-ui/react-menubar";
import { Ellipsis, Search, Star } from "lucide-react";

export default function SearchPage() {
  return (
   <>
   <div className="bg-white rounded-md">
        <div className="flex flex-row justify-between p-4">
            <div className="flex flex-row items-center gap-4 rounded-md border-2">
                <Input placeholder="Buscar..." className="w-130 border-0"></Input>
                <Search></Search>
            </div>
            <div className="">
                <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Todos</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
                </Select>
            </div>
            <div className="">
                <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Filtrar</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
                </Select>
            </div>
        </div>
        <hr />
        <div className="flex flex-row justify-between items-center p-4">
            <div className="flex flex-row gap-4">
                <div className="">
                    <Button className="bg-indigo-500">Recientes</Button>
                </div>
                <div className="">
                     <Button className="bg-indigo-500">Favoritos</Button>
                </div>
                <div className="">
                    <Button className="bg-indigo-500">Todos</Button>
                </div>
            </div>
            <div className="">
                <Menubar>
                <MenubarMenu>
                    <MenubarTrigger><Ellipsis></Ellipsis></MenubarTrigger>
                    <MenubarContent>
                    <MenubarItem>
                        Mas Opciones
                    </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                </Menubar>
            </div>
        </div>
   </div>
   </>
  )
}
