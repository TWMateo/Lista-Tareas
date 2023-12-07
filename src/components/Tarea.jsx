import React from 'react'

const Tarea = () => {
  return (
    <div className='flex flex-row m-5 text-2xl border border-black rounded-xl border-b bg-slate-400'>
      <input type='checkbox' className=""/>
      <p className='h-full w-8/12 p-3'>Tarea Nombre</p>
      <p className='h-full w-3/12 p-3'>\ Fecha</p>
    </div>
  )
}

export default Tarea