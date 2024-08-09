import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"
import { quickSearchOptions } from "./_constants/search"
import BookingItem from "./_components/booking-item"

interface quickSearchOptions {
  imageUrl: string
  title: string
}

const Home = async () => {
  const babershops = await db.barbershop.findMany({})
  const popularbabrshops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  return (
    <>
      <Header />

      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Gabriel!</h2>
        <p>Quarta-feira, 5 de agosto</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça a sua busca!" />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        <div className="mt-6 flex gap-3 overflow-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((item) => (
            <Button key={item.title} className="gap-2">
              <Image src={item.imageUrl} width={16} height={16} alt="Cabelo" />
              {item.title}
            </Button>
          ))}
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="FXR"
            fill
            src={"/banner-01.png"}
            className="object-cover"
          />
        </div>

        <BookingItem />

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {babershops.map((babershop) => (
            <BarbershopItem key={babershop.id} babershop={babershop} />
          ))}
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populadores
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularbabrshops.map((babershop) => (
            <BarbershopItem key={babershop.id} babershop={babershop} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
