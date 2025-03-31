import React from 'react'
import SpaIcon from '../public/img/Spa-Icon.svg';
import Touch from '../public/img/Touch-Icon.svg';
import Revival from '../public/img/Revival-Icon.svg';
const SpaServiceFeature = () => {
  return (
    <div className='flex px-40 py-40 gap-20'>
        <div className='flex items-center gap-5 border-r-[1px] border-r-[#D8D8D8]'>
            <img src={SpaIcon}></img>
            <div className='flex flex-col'>
                <h1 className='text-2xl font-bold'>The Soothing Spa</h1>
                <p className='text-[18px] font-normal'>Lorem Ipsum simply dummy text printing type setting industry. </p>
            </div>
        </div>
        <div className='flex items-center gap-5 border-r-[1px] border-r-[#D8D8D8]'>
            <img src={Touch}></img>
            <div className='flex flex-col'>
                <h1 className='text-2xl font-bold'>The Soothing Spa</h1>
                <p className='text-[18px] font-normal'>Lorem Ipsum simply dummy text printing type setting industry. </p>
            </div>
        </div>
        <div className='flex items-center gap-5'>
            <img src={Revival}></img>
            <div className='flex flex-col'>
                <h1 className='text-2xl font-bold'>The Soothing Spa</h1>
                <p className='text-[18px] font-normal'>Lorem Ipsum simply dummy text printing type setting industry. </p>
            </div>
        </div>
    </div>
  )
}

export default SpaServiceFeature