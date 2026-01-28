import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menubar, MenubarContent, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@/components/ui/menubar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MenubarItem } from "@radix-ui/react-menubar";
import { Brain, Ellipsis, ListCheck, Search, Star } from "lucide-react";

export default function SearchPage() {
  return (
   <>
   <div className="bg-white rounded-md">
        <div className="flex flex-row flex-wrap justify-between items-center p-4">
            <div className="flex flex-row md:mb-0 mb-4 items-center gap-4 rounded-md border-2">
                <Input placeholder="Buscar..." className="w-full border-0"></Input>
               
            </div>
            <div className="flex flex-row gap-4">
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

        </div>
        <hr />
        <div className="flex flex-row justify-between items-center p-4">
            <div className="flex flex-row gap-4">
                <div className="">
                    <Button className="bg-indigo-500">
                        <Brain />
                        <p>Recientes</p>
                    </Button>
                </div>
                <div className="">
                     <Button className="bg-indigo-500">
                        <Star />
                        <p>Favoritos</p>
                     </Button>
                </div>
                <div className="">
                    <Button className="bg-indigo-500">
                        <ListCheck />
                        <p>Todos</p>
                    </Button>
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
