import React from 'react'

const BrandLogo = () => {
  return (
    <div>
        <div className='flex items-center justify-between gap-3 h-[80px]'>

        <img width={146} height={34} src={'/horizon.png'} alt='Logo' />
        <div className='w-0.5 h-[34px] bg-white' />
        <img width={146} height={34} src={'/Text.png'} alt='Logo' />
        </div>
    </div>
  )
}

export default BrandLogo