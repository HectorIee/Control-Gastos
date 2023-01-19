import React from 'react'
import toast, { Toaster } from 'react-hot-toast';

const NewBudget = ({ budget, setBudget, setIsValid }) => {

  const handleBudget = (e) => {
    e.preventDefault();
    if (!Number(budget) || Number(budget) < 0) {
      toast.error("No es un presupuesto valido")
      return
    } 
    setIsValid(true)
  }

  return (
    <div className='bg-white w-4/5 xl:w-3/5 -mt-10 mx-auto translate-y-16 flex justify-between items-center px-4 shadow-md shadow-gray-500 rounded-lg'>

      <form className=' w-full grid mb-5 py-10 mx-auto'
        onSubmit={handleBudget}
      >
        <label className='text-lg text-blue-700 font-semibold text-center mb-2'>Definir Presupuesto</label>
        <input className='w-3/4 bg-gray-200 flex-1 p-1 mx-auto items-center rounded-lg border-2 border-blue-800 text-center text-black text-lg'
          type='text' placeholder='Añade tu Presupuesto'
          value={budget} onChange={(e) => setBudget(Number(e.target.value))}
        />
        <input className='w-3/4 bg-blue-800 border-none p-1 items-center mx-auto mb-2 mt-4 text-white text-lg'
          type='submit' value='Añadir'
        />
      </form>
      <Toaster position="bottom-center" reverseOrder={false} toastOptions={{ duration: 1500 }}/>
    </div>
  )
}

export default NewBudget