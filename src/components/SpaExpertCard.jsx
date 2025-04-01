import React from 'react'

const SpaExpertCard = ({expert}) => {
  return (
    <div className='relative group pt-8'>
    <img src={`${expert.image}`} className='w-[315px] h-[431px] transition-transform duration-300 ease-in-out group-hover:-translate-y-2'></img>
    <div className='absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 w-[246px] bg-[#FFF7F4] p-5 *:text-center shadow-md rounded-lg'>
        <p className='text-[20px] font-semibold'>{expert.name}</p>
        <p className='text-base font-medium'>{expert.role}</p>
    </div>
</div>

  )
}

export default SpaExpertCard