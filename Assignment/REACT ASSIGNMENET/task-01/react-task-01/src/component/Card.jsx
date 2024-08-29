import React from 'react'

function Card({heading,discription}) {
  return (
    <div className='p-2 m-2 w-40 h-100 bg-blue-300 text-center shadow-xl rounded-lg'>
      <h1 className='text-2xl'>{heading}</h1>
      <p>{discription}</p>
    </div>
  )
}

export default Card
