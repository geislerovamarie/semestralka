"use client"
import { Brand, CarModel } from "@prisma/client"
import BrandAndModelSearchFormFields from "./BrandAndModelSearchFormFields"
import { CarWithDeps } from "@/types/prismaTypes"
import CarList from "./CarList"
import { useState } from "react"
//import { fetchFilteredCars } from "@/utils/fetch"

const CarSearchForm = ({
  models,
  brands,
  initialCars,
}: {
  models: CarModel[]
  brands: Brand[]
  initialCars: CarWithDeps[]
}) => {
  const [cars, setCars] = useState<CarWithDeps[]>(initialCars)

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const location = formData.get("location")?.toString() || ""
    const brandId = formData.get("brandId")?.toString() || ""
    const modelId = formData.get("modelId")?.toString() || ""

    const response = await fetch(
      `/api/fetchFilteredCars?location=${location}&brandId=${brandId}&modelId=${modelId}`,
    )
    const filteredCars = await response.json()
    setCars(filteredCars)
  }

  return (
    <div>
      <form onSubmit={handleSearch} className="form-container">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Write a location"
          className="form-field"
        />
        <BrandAndModelSearchFormFields models={models} brands={brands} />
        <br />
        <button className="btn">Search</button>
      </form>
      <CarList cars={cars} />
    </div>
  )
}

export default CarSearchForm
