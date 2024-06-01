"use server"
import { redirect } from "next/navigation"
import prisma from "./prisma"
import { fetchFilteredCars } from "./fetch"

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
export const searchCars = async (formData: FormData) => {
  const location =
    formData.get("location") != null ? formData.get("location")!.toString() : ""
  const brandId =
    formData.get("brandId") != null ? formData.get("brandId")!.toString() : ""
  const modelId =
    formData.get("modelId") != null ? formData.get("modelId")!.toString() : ""

  const cars = await fetchFilteredCars(location, brandId, modelId)
  return cars
}
