import { Button } from "./ui/button"
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react"
import { SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search"
// import { Avatar } from "./ui/avatar"
// import { AvatarImage } from "@radix-ui/react-avatar"
import Image from "next/image"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"

const SiderbarButton = () => {
  return (
    <SheetContent className="overflow-auto">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center justify-between gap-3 border-b border-solid py-5">
        <h2 className="text-lg font-bold">Olá, faça o seu login!</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button size={"icon"}>
              <LogInIcon />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Faça seu login na plataforma</DialogTitle>
              <DialogDescription>
                Conecte-se usando sua conta do Google.
              </DialogDescription>
            </DialogHeader>
            <Button variant={"outline"} className="gap-1 font-bold">
              Google
            </Button>
          </DialogContent>
        </Dialog>
        {/* <Avatar>
                    <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </Avatar>

                <div className="">
                    <p className="font-bold">Gabriel Alberto</p>
                    <p className="text-sm">gahalberto@icloud.com</p>
                </div>
 */}
      </div>

      <div className="flex flex-col gap-4 border-b border-solid p-5">
        <Button className="justify-start gap-2" asChild>
          <Link href={"/"}>
            <HomeIcon size={18} />
            Início
          </Link>
        </Button>
        <Button className="justify-start gap-2" variant={"ghost"}>
          <CalendarIcon size={18} /> Agendamentos
        </Button>
      </div>

      <div className="flex flex-col gap-4 border-b border-solid p-5">
        {quickSearchOptions.map((option) => (
          <Button
            key={option.title}
            className="justify-start gap-2"
            variant={"ghost"}
          >
            <Image
              src={option.imageUrl}
              alt={option.title}
              height={18}
              width={18}
            />
            {option.title}
          </Button>
        ))}
      </div>
      <div className="flex flex-col gap-4 border-b border-solid p-5">
        <Button className="justify-start gap-2" variant={"ghost"}>
          <LogOutIcon />
          Sair da conta
        </Button>
      </div>
    </SheetContent>
  )
}

export default SiderbarButton
