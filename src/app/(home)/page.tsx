import CarList from "@/components/CarList"
import CarSearchForm from "@/components/CarSearchForm"
import {
  fetchBrands,
  fetchCars,
  fetchFilteredCars,
  fetchModels,
} from "@/utils/fetch"
import Link from "next/link"

const HomePage = async () => {
  const cars = await fetchCars()
  const brands = await fetchBrands()
  const models = await fetchModels()

  return (
    <div className="m-5">
      <h2 className="header">
        <Link href={"/"}>Velocity Vault</Link>
      </h2>
      <div>
        <Link href={"/car/new"}>
          <button className="btn"> Add new car </button>
        </Link>
      </div>

      <CarSearchForm brands={brands} models={models} />
      <CarList cars={cars} />
    </div>
  )
}

export default HomePage
