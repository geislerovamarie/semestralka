"use client"
import { Brand, CarModel } from "@prisma/client"
import { Fragment, useMemo, useState } from "react"

const BrandAndModelFormFields = ({
  models,
  brands,
}: {
  models: CarModel[]
  brands: Brand[]
}) => {
  const [brandId, setBrandId] = useState("")
  const [modelId, setModelId] = useState("")

  const filteredModels = useMemo(() => {
    return models.filter((model) => model.brandId === brandId)
  }, [brandId, models])
  return (
    <Fragment>
      <label htmlFor="brand">Brand</label>
      <select
        name="brandId"
        className="form-field"
        required={true}
        id=""
        value={brandId}
        onChange={(e) => {
          setBrandId(e.target.value)
          setModelId("")
        }}
      >
        <option value="" disabled>
          {" "}
          Select a brand{" "}
        </option>
        {brands.map((brand) => (
          <option key={brand.id} value={brand.id}>
            {brand.name}
          </option>
        ))}
      </select>

      <label htmlFor="model">Model</label>
      <select
        name="modelId"
        required={true}
        value={modelId}
        className="form-field"
        onChange={(e) => setModelId(e.target.value)}
        disabled={!brandId}
      >
        <option value="" disabled>
          Select a model
        </option>
        {filteredModels.map((model) => (
          <option key={model.id} value={model.id}>
            {model.name}
          </option>
        ))}
      </select>
    </Fragment>
  )
}

export default BrandAndModelFormFields
