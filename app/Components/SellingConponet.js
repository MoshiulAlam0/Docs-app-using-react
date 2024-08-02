'use client'
import React, { useRef } from 'react'
import Card from './Card'


const SellingConponet = () => {
  const mainSecRef = useRef(null)
  //my data 
  const data = [{
    dosc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, obcaecati.',
    fileSize: '1.3Mb',
    isCloseIcon: true,
    isBottom: true,
    bottomText:'downlode',
    bottomColor: '#4aff3aab', 
  },
  {
    dosc: 'this is a frist file it is like a best file in this dosc you can use properly in sha allah .',
    fileSize: '1.3Mb',
    isCloseIcon: false,
    isBottom: true,
    bottomText:'downlode',
    bottomColor: '#56fff1a8', 
  },
  {
    dosc: 'this is a frist file it is like a best file in this dosc you can use properly in sha allah .',
    fileSize: '1.3Mb',
    isCloseIcon: false,
    isBottom: true,
    bottomText:'downlode',
    bottomColor: '#4aff3aab', 
  },
  {
    dosc: 'this is a frist file it is like a best file in this dosc you can use properly in sha allah .',
    fileSize: '1.3Mb',
    isCloseIcon: true,
    isBottom: false,
    bottomText:'downlode',
    bottomColor: '#4aff3aab', 
  },
  {
    dosc: 'this is a frist file it is like a best file in this dosc you can use properly in sha allah .',
    fileSize: '3.3Mb',
    isCloseIcon: false,
    isBottom: true,
    bottomText:'downlode',
    bottomColor: '#56fff1a8', 
  },
  {
    dosc: 'this is a frist file it is like a best file in this dosc you can use properly in sha allah .',
    fileSize: '1.3Mb',
    isCloseIcon: false,
    isBottom: false,
    bottomText:'uplode',
    bottomColor: '#56fff1a8', 
  },
]

  return (
    <section id="main-section" ref={mainSecRef} className='w-screen h-screen overflow-hidden bg-transparent p-[2vmin] flex gap-2 items-center justify-center flex-wrap'>
      {data.map(item => {
        return <Card info={item} refrence={mainSecRef}/>
      })}
    </section>
  )
}

export default SellingConponet
