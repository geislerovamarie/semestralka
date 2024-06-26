"use server"
import { redirect } from "next/navigation"
import prisma from "./prisma"

export const createCar = async (formData: FormData) => {
  const description = formData.get("description")?.toString()
  const location = formData.get("location")?.toString()
  const price = formData.get("price")
    ? parseFloat(formData.get("price")!.toString())
    : undefined
  const color = formData.get("color")?.toString()
  const year = formData.get("year")
    ? parseInt(formData.get("year")!.toString())
    : undefined
  const modelId = formData.get("modelId")?.toString()
  const brandId = formData.get("brandId")?.toString()

  if (!modelId || !brandId) {
    return
  }

  await prisma.car.create({
    data: {
      description: description,
      location: location,
      price: price,
      color: color,
      year: year,
      modelId: modelId,
      brandId: brandId,
    },
  })
  redirect("/")
}
