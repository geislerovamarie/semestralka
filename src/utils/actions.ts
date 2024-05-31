'use server'

import { redirect } from 'next/navigation'
import prisma from './prisma'

export const fetchBrands = async () => {
  const brands = await prisma.brand.findMany()
  return brands
}

export const fetchModels = async () => {
  const models = await prisma.carModel.findMany()
  return models
}

export const createCar = async (formData: FormData) => {
  const modelId = formData.get('modelId')?.toString()
  const brandId = formData.get('brandId')?.toString()
  const description = formData.get('description')?.toString()

  if (!modelId || !brandId /* || !description */) {
    return
  }

  await prisma.car.create({
    data: {
      modelId: modelId,
      brandId: brandId,
      description: description,
    },
  })

  redirect('/')
}

// todo searchCar
export const searchCar = async () => {}



