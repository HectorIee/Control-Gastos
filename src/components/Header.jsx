import React from 'react'
import ManageBugdet from './ManageBugdet'
import NewBudget from './NewBudget'

const Header = ({ budget, setBudget, isValid, setIsValid, gastos, setGastos}) => {
  return (
    <div className='w-full bg-presupuesto '>
      <h1 className='font-bold text-3xl text-center text-white uppercase md:w-2/4 mx-auto pt-10 px-2'>
        Planificador de Gastos
      </h1>

      {isValid ? (
        <ManageBugdet
          budget={budget} setBudget={setBudget}
          gastos={gastos} setGastos={setGastos}
          setIsValid={setIsValid}
        />
      ) : (
        <NewBudget
          budget={budget} setBudget={setBudget}
          setIsValid={setIsValid}
        />
      )}

    </div>
  )
}

export default Header