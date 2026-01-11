import { Button } from "@/components/ui/button"
import { toast } from "sonner"


export default function SettingPage() {
    const onchange=()=>{
        toast.message("hola")
    }
  return (
    <>
    <div className="">
        <div className="">
            <h1>Configuarion</h1>
        </div>
        <Button onClick={onchange}>Hola</Button>
    </div>
    </>
  )
}
