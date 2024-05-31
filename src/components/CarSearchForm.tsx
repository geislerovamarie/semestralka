//import { createCar } from '@/utils/actions'
import { Brand, CarModel } from '@prisma/client'
import BrandAndModelSearchFormFields from './BrandAndModelSearchFormFields'
import { searchCar } from '@/utils/actions'
import { useState } from 'react'

const CarSearchForm = ({
    models,
    brands,
  }: {
    models: CarModel[]
    brands: Brand[]
  }) => {

  return (
    <div>
      <form action={searchCar} className="form-container">
        <label htmlFor="location" >Location</label>
        <input type="text" name="location" id="location" placeholder="Write a location" className="form-field"/>
        <BrandAndModelSearchFormFields models={models} brands={brands} />
        <br />
        <button className="btn">Search</button>
      </form>
    </div>
  )
}

export default CarSearchForm
