import { createCar } from "@/utils/actions"
import { Brand, CarModel } from "@prisma/client"
import BrandAndModelNewCarFormFields from "./BrandAndModelNewCarFormFields"

const NewCarForm = ({
  models,
  brands,
}: {
  models: CarModel[]
  brands: Brand[]
}) => {
  return (
    <div>
      <form action={createCar} className="form-container">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          className="form-field"
          name="description"
          placeholder="Description"
        />
        <label htmlFor="location">Location</label>
        <input
          type="text"
          className="form-field"
          name="location"
          placeholder="Location"
        />
        <label htmlFor="price">Price</label>
        <input
          type="text"
          className="form-field"
          name="price"
          placeholder="Price"
        />
        <label htmlFor="color">Color</label>
        <input
          type="text"
          className="form-field"
          name="color"
          placeholder="Color"
        />
        <label htmlFor="year">Year</label>
        <input
          type="text"
          className="form-field"
          name="year"
          placeholder="Year"
        />
        <BrandAndModelNewCarFormFields models={models} brands={brands} />

        <button type="submit" className="btn">
          Add car
        </button>
      </form>
    </div>
  )
}

export default NewCarForm
