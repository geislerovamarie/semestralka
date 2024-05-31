import { CarWithDeps } from "@/types/prismaTypes"
import Link from "next/link"

const CarItem = ({ car }: { car: CarWithDeps }) => {
  const price = car.price != null ? car.price + " CZK" : ""

  return (
    <Link href={`car/${car.id}`} className="cursor-pointer">
      <div className="flex w-full rounded-md border p-2 shadow-sm hover:bg-slate-100">
        <div className="size-12 flex-none rounded-full bg-gray-400" />
        <div className="pl-5">
          <h1 className="text-base font-medium leading-7 text-gray-900">
            {car.brand.name} {car.model.name}
          </h1>
          <h2 className="text-sm font-medium leading-5 text-gray-700">{`${car.color} - ${car.location} - ${price}`}</h2>
        </div>
      </div>
    </Link>
  )
}

export default CarItem
