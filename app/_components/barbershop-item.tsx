import { Barbershop } from "@prisma/client"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Star } from "lucide-react"
import Link from "next/link"

interface BarbershopItemsProps {
  babershop: Barbershop
}

const BarbershopItem = ({ babershop }: BarbershopItemsProps) => {
  return (
    <Card className="min-w-[167px] rounded-2xl px-1 pt-1">
      <CardContent className="p-0">
        <div className="relative h-[159px] w-full">
          <Image
            fill
            className="rounded-2xl object-cover"
            src={babershop.imageUrl}
            alt={babershop.name}
          />

          <Badge className="absolute left-2 top-2" variant="secondary">
            <Star size={12} className="fill-primary text-primary" />
            <p className="space-x-1 text-xs font-semibold">5,0</p>
          </Badge>
        </div>
        <div className="px-1 py-3">
          <h3 className="truncate font-semibold">{babershop.name}</h3>
          <p className="truncate text-sm text-gray-400">{babershop.address}</p>
          <Button variant="secondary" className="mt-3 w-full" asChild>
            <Link href={`/babershops/${babershop.id}`}>Reservar</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default BarbershopItem
