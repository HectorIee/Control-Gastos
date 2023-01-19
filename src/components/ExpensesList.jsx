import React from 'react'
import Expense from './Expense'

const ExpensesList = ({ gastos, setGastoEditar, deleteExpense, filtro, gastosFiltro }) => {
  return (
    <div className='mt-28 text-gray-500 text-2xl w-4/5 sm:w-9/12 lg:w-8/12 mx-auto mb-4'>

      {filtro ? (
        <>
          <h2 className='font-semibold mb-4'>{gastosFiltro.length ? 'Gastos' : 'No hay gastos aún en esta categoria'}</h2>
          {gastosFiltro.map(gasto => (
            <Expense
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              deleteExpense={deleteExpense}
            />
          ))}
        </>
      ) : (
        <>
         <h2 className='font-semibold mb-4'>{gastos.length ? 'Gastos' : 'No hay gastos aún'}</h2>
          {gastos.map(gasto => (
            <Expense
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              deleteExpense={deleteExpense}
            />
          ))}
        </>
      )}
    </div>
  )
}

export default ExpensesList
