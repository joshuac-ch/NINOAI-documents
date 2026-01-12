import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

export default function MenuBar({icon}) {
  return (
    <Menubar className="rounded-full p-0">
        <MenubarMenu>
            <MenubarTrigger className="bg-white/50 p-0">
                <img src={icon} className="w-10 h-10 rounded-full" alt="" />
            </MenubarTrigger>
            <MenubarContent>
            <MenubarItem>
                New Tab 
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            
            <MenubarItem>Share</MenubarItem>
            
            <MenubarItem>Print</MenubarItem>
            </MenubarContent>
        </MenubarMenu>
    </Menubar>
  )
}
