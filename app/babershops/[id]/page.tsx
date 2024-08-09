import PhoneItem from "@/app/_components/phone-item"
import ServiceItem from "@/app/_components/serrvice-item"
import { Button } from "@/app/_components/ui/button"
import { db } from "@/app/_lib/prisma"
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface BaberShopProps {
  params: {
    id: string
  }
}

const BabershopPage = async ({ params }: BaberShopProps) => {
  const babershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  })
  if (!babershop) notFound()


  return (
    <div>
      <div className="relative h-[250px] w-full">
        <Image
          src={babershop?.imageUrl}
          alt="Imagem da Barbershop"
          fill
          className="object-cover"
        />

        <Button className="absolute left-4 top-4" asChild variant="secondary">
          <Link href={"/"}>
            <ChevronLeftIcon />
          </Link>
        </Button>

        <Button className="absolute right-4 top-4" variant="secondary">
          <MenuIcon />
        </Button>
      </div>
      <div className="border-b border-solid p-5">
        <h1 className="mb-3 text-xl font-bold">{babershop.name}</h1>
        <div className="mb-1 flex items-center gap-1">
          <MapPinIcon className="text-primary" size={18} />
          <p>{babershop?.address}</p>
        </div>

        <div className="flex items-center gap-1">
          <StarIcon className="text-primary" size={18} />
          <p>5,0 (889 avaliacoes)</p>
        </div>
      </div>

      {/* Descriçao  */}
      <div className="space-y-3 border-b border-solid p-5">
        <h2 className="font-bold uppercase text-gray-400">Sobre nós</h2>
        <p className="text-justify text-sm">{babershop?.description}</p>
      </div>

      <div className="space-y-3 border-b border-solid p-5">
        <h2 className="font-bold uppercase text-gray-400">Serviços</h2>
        <div className="space-y-3">
          {babershop.services.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </div>
      </div>

      <div className="p-5">
        {babershop.phones.map((phone) => (
          <PhoneItem  key={phone} phone={phone} />
))}
      </div>
    </div>
  )
}

export default BabershopPage
