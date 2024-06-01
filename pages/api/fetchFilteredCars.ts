import type { NextApiRequest, NextApiResponse } from "next"
import prisma from "@/utils/prisma"
import { CarWithDeps } from "@/types/prismaTypes"

const fetchFilteredCars = async (req: NextApiRequest, res: NextApiResponse) => {
  const { location, brandId, modelId } = req.query
  console.log(location, brandId, modelId)

  try {
    const cars: CarWithDeps[] = await prisma.car.findMany({
      where: {
        location: location ? { contains: location as string } : undefined,
        brandId: brandId ? { equals: brandId as string } : undefined,
        modelId: modelId ? { equals: modelId as string } : undefined,
      },
      include: {
        brand: true,
        model: true,
      },
    })

    res.status(200).json(cars)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch filtered cars" })
  }
}

export default fetchFilteredCars
