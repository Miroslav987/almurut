import React from 'react'

export default function Search() {
  return (
    <div className='relative w-full   h-[54] flex items-center md:w-[38%] '>
    <input className='w-[100%] h-[100%] pl-[64]  bg-grey_first  rounded-[10px]  '
      placeholder='Поиск'
    type="text" />
    <svg className='absolute  left-[20] ' width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.6667 17.6667L26 26M10.7222 20.4444C5.35279 20.4444 1 16.0917 1 10.7222C1 5.35279 5.35279 1 10.7222 1C16.0917 1 20.4444 5.35279 20.4444 10.7222C20.4444 16.0917 16.0917 20.4444 10.7222 20.4444Z" stroke="#1E2128" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
  )
}
