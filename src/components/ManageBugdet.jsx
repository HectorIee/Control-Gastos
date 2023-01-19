import React, { useState, useEffect } from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ManageBugdet = ({ gastos, budget, setGastos, setBudget, setIsValid }) => {

  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0)

  /* Establecer el presuspuesto disponible y lo gastado */
  useEffect(() => {
    const totalSpent = gastos.reduce((total, spent) => spent.cantidad + total, 0)
    const totalBugdet = budget - totalSpent

    //Calcular el porcentaje gastado
    const newPorcentage = (((budget - totalBugdet) / budget) * 100).toFixed(2)
    setTimeout(() => {
      setPorcentaje(newPorcentage)
    }, 1200);
    setAvailable(totalBugdet)
    setSpent(totalSpent)
  }, [gastos])

  /* Formateo del Presupuesto para mostrarlo */
  const budgetFormat = (amount) => {
    return amount.toLocaleString('es-US', {
      style: 'currency',
      currency: 'USD'
    });
  }

  const handleResetApp = () => {
    const result = confirm('Deseas reiniciar presupuesto y gastos ?')
    if (result) {
      setGastos([]);
      setBudget(0);
      setIsValid(false)
    }
  }

  return (
    <div className='bg-white w-4/5 sm:w-8/12 lg:w-5/12  mx-auto translate-y-16 -mt-10 flex flex-col sm:flex-row  justify-between items-center px-4 shadow-md shadow-gray-500 rounded-lg '>
      <div className='w-7/12 md:w-4/12 mt-5 sm:mb-5 sm:mt-10 lg:my-0 md:mx-auto '>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: porcentaje > 100 ? '#dc2626' : '#3b82f6',
            textColor: '#3b82f6',
            trailColor: '#f5f5f5'
          })}
          value={porcentaje}
          text={`${porcentaje}% Gastado`}
        />
      </div>
      <div className='bg-white mx-auto my-3 md:py-10'>
        <button
          className='border-none bg-rose-700 text-white p-1 w-full text-center uppercase font-bold rounded-lg transition-colors duration-200 hover:bg-rose-800 hover:cursor-pointer mb-2'
          type='button' 
          onClick={() => handleResetApp()}
        >
          Resetear App
        </button>
        <p className='mb-2'>
          <span className='text-lg text-blue-500 font-semibold text-center'>Presupuesto: </span> {budgetFormat(budget)}
        </p>
        <p className={`${available < 0 ? 'negativo' : ''}`}>
          <span className='text-lg text-blue-500 font-semibold text-center'>Disponible: </span> {budgetFormat(available)}
        </p>
        <p className='mb-2'>
          <span className='text-lg text-blue-500 font-semibold text-center'>Gastado: </span> {budgetFormat(spent)}
        </p>
      </div>
    </div>
  )
}

export default ManageBugdet
