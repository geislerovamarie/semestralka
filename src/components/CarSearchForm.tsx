import { Brand, CarModel } from "@prisma/client"
import BrandAndModelSearchFormFields from "./BrandAndModelSearchFormFields"
import { searchCars } from "@/utils/actions"

const CarSearchForm = ({
  models,
  brands,
}: {
  models: CarModel[]
  brands: Brand[]
}) => {
  return (
    <div>
      <form action={searchCars} className="form-container">
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
    </div>
  )
}

export default CarSearchForm
