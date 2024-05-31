import { Brand, Car, CarModel } from '@prisma/client'

export interface CarWithDeps extends Car {
  
  description: string | null
  location: string | null
  price: number | null
  color: string | null
  year: number | null
  model: CarModel
  brand: Brand
}
