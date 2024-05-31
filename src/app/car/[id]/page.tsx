import { fetchCarDetail } from '@/utils/fetch'
import prisma from '@/utils/prisma'
import Link from 'next/link'
import React from 'react';

interface DetailParamProps {
  label: string;
  value: string;
}

const DetailParam: React.FC<DetailParamProps> = (props) => {
  const displayValue = props.value.includes("null") ? "" : props.value;

  return (
    <div className="px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-2 sm:px-2">
      <dt className="text-sm font-medium leading-6 text-gray-900">
        {props.label}
      </dt>
      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
        {displayValue}
      </dd>
    </div>
  );
};

const CarDetailPage = async ({ params }: { params: { id: string } }) => {
  const car = await fetchCarDetail(params.id)

  return (
    <div className='m-5'>
      <Link href={'/'}>
        <button className="back-btn"> Back </button>
      </Link>
      <h2 className="header"> 
        <div>{car?.brand.name} {car?.model.name}</div>
      </h2>
      <div className="w-1/3 h-44 rounded-lg flex-none full bg-gray-400 my-5" />
      
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <DetailParam label="Year" value={car?.year + ""} />
          <DetailParam label="Price" value={car?.price + " " + "CZK"} />
          <DetailParam label="Color" value={car?.color + ""} />
          <DetailParam label="Location" value={car?.location + ""} />
          <DetailParam label="Description" value={car?.description + ""} />
        </dl>
      </div>
    </div>
  )
}

export default CarDetailPage
