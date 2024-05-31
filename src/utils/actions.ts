"use server"

import { redirect } from "next/navigation"
import prisma from "./prisma"
import { revalidatePath } from "next/cache"

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

  if (!modelId || !brandId /* || !description */) {
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

// todo searchCar
export const searchCar = async (formData: FormData) => {
  const location = formData.get("location")
    ? formData.get("location")!.toString()
    : ""
  const modelId = formData.get("modelId")
    ? formData.get("modelId")!.toString()
    : ""
  const brandId = formData.get("brandId")
    ? formData.get("brandId")!.toString()
    : ""

  console.log(location)
  console.log(brandId)
  console.log(modelId)
  // if not null turn to string
}
