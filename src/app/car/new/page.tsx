import NewCarForm from '@/components/NewCarForm'
import { fetchBrands, fetchModels } from '@/utils/fetch'
import prisma from '@/utils/prisma'
import Link from 'next/link'


const NewCarPage = async () => {
  const brands = await fetchBrands()
  const models = await fetchModels()

  return (
    <div className='m-5'>
      <Link href={'/'}>
        <button className="back-btn"> Back </button>
      </Link>
      <h2 className="header"> Add new car </h2>
      
      <NewCarForm brands={brands} models={models} />
    </div>
  )
}

export default NewCarPage
