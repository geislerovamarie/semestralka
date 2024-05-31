import NewCarForm from '@/components/NewCarForm'
import { fetchBrands, fetchModels } from '@/utils/actions'
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
      <h3 className="py-2 text-3xl font-bold tracking-tight text-gray-900"> Add new car </h3>
      
      <NewCarForm brands={brands} models={models} />
    </div>
  )
}

export default NewCarPage
