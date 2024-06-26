import prisma from "./prisma"

export const fetchBrands = async () => {
  const brands = await prisma.brand.findMany()
  return brands
}

export const fetchModels = async () => {
  const models = await prisma.carModel.findMany()
  return models
}

export const fetchCarDetail = async (id: string) => {
  const car = await prisma.car.findUnique({
    where: {
      id: id,
    },
    include: {
      model: true,
      brand: true,
    },
  })
  return car
}

export const fetchCars = async () => {
  const cars = await prisma.car.findMany({
    include: {
      model: true,
      brand: true,
    },
  })
  return cars
}
