import { CarWithDeps } from '@/types/prismaTypes'
import Link from 'next/link'

const CarItem = ({ car }: { car: CarWithDeps }) => {
  return (
    <Link href={`car/${car.id}`} className="cursor-pointer">
      
      <div className="flex w-full rounded-md border p-2 shadow-sm hover:bg-slate-100">
        <div className="size-12 flex-none rounded-full bg-gray-400" />
        <div className="pl-5 text-base">
          <h1 className="text-xl">
            {car.brand.name} {car.model.name}
          </h1>
          <h2>{`${car.color} - ${car.location} - ${car.price} CZK`}</h2>
        </div>
      </div>
    </Link>
  )
}

export default CarItem
