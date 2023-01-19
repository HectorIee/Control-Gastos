import React from 'react'

const Filterss = ({ filtro, setFiltro }) => {
  return (
    <div className=' bg-white w-4/5 sm:w-9/12 lg:w-8/12 py-5 mx-auto translate-y-24 items-center shadow-md shadow-gray-500 rounded-lg'>
      <form>
        <div className='flex flex-col md:flex-row items-center font-semibold text-gray-500 text-lg md:text-2xl'>
          <label className='md:mx-auto sm:mb-0'>Filtrar Gastos</label>
          <select
            className='md:mx-auto text-center w-4/6 text-lg py-1 bg-gray-100 md:w-4/6 rounded-lg mt-2 sm:mt-0 border-2 border-gray-300 focus:outline-none'
            value={filtro} onChange={(e) => setFiltro(e.target.value)}
          >
            <option value="">Todas las Categorias</option>
            <option value="AHORRO">Ahorro</option>
            <option value="COMIDA">Comida</option>
            <option value="CASA">Casa</option>
            <option value="GASTOS">Gastos Varios</option>
            <option value="OCIO">Ocio</option>
            <option value="SALUD">Salud</option>
            <option value="SUSCRIPCIONES">Suscripciones</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Filterss
