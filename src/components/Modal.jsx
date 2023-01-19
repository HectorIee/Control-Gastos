import React, { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import CloseBtn from '../img/cerrar.svg'

const Modal = ({ setModal, animarModal, setAnimarModal, saveExpense, gastoEditar, setGastoEditar}) => {

  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [categoria, setCategoria] = useState('')
  const [fecha, setFecha] = useState('')
  const [id, setId] = useState('')

  useEffect(() => {
    if(Object.keys(gastoEditar).length > 0) {
      setNombre(gastoEditar.nombre)
      setCantidad(gastoEditar.cantidad)
      setCategoria(gastoEditar.categoria)
      setId(gastoEditar.id)
      setFecha(gastoEditar.fecha)
    }
  }, [])

  const hiddenModal = () => {
    setAnimarModal(false)
    setGastoEditar({})
    setTimeout(() => {
      setModal(false)
    }, 800);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if ([nombre, cantidad, categoria].includes('')) {
      toast.error("Todos los valores son obligatorios")
      return
    }
    saveExpense({nombre, cantidad, categoria, id, fecha})
  }

  return (
    <div className='modal h-screen'>
      <div className='close-modal'>
        <img
          className='block'
          src={CloseBtn} alt='Button of close'
          onClick={hiddenModal}
        />
      </div>

      <form
        className={`formulario w-3/4 md:w-2/5 text-white mx-auto mt-24 md:mt-20 ${animarModal ? "animar" : 'cerrar'} `}
        onSubmit={handleSubmit}
      >
        <legend>{gastoEditar.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>
        <div className='flex flex-col mb-4'>
          <label htmlFor='nombre' className='my-2 text-2xl'>Nombre Gasto</label>
          <input
            className=' bg-gray-200 flex-1 p-1 pl-2 items-center rounded-lg text-black text-md'
            id='nombre' type='text' placeholder='Añade el Nombre del Gasto'
            value={nombre} onChange={e => setNombre(e.target.value)}
          />
        </div>

        <div className='flex flex-col mb-4'>
          <label htmlFor='nombre' className='my-2 text-2xl'>Costo</label>
          <input
            className=' bg-gray-200 flex-1 p-1 pl-2 items-center rounded-lg text-black text-md'
            id='nombre' type='number' placeholder='Añade la cantidad del gasto: ej. 300'
            value={cantidad} onChange={e => setCantidad(Number(e.target.value))}
          />
        </div>

        <div className='flex flex-col mb-4'>
          <label htmlFor='nombre' className='my-2 text-2xl'>Categoría</label>
          <select
            id='categoria' className='p-2 rounded-lg bg-gray-200 text-black text-center'
            value={categoria} onChange={e => setCategoria(e.target.value)}
          >
            <option value=""> -- Seleccione -- </option>
            <option value="AHORRO">Ahorro</option>
            <option value="COMIDA">Comida</option>
            <option value="CASA">Casa</option>
            <option value="GASTOS">Gastos Varios</option>
            <option value="OCIO">Ocio</option>
            <option value="SALUD">Salud</option>
            <option value="SUSCRIPCIONES">Suscripciones</option>
          </select>
        </div>

        <input
          className='w-3/5 flex bg-blue-800 border-none justify-center items-center text-white text-xl rounded-lg mx-auto p-1 mb-2 mt-8 '
          type='submit' value={gastoEditar.nombre ? 'Guardar Cambios' : 'Añadir Gasto'}
        />
      </form>
      <Toaster position="top-left" reverseOrder={false} toastOptions={{ duration: 1500 }} />
    </div>
  )
}

export default Modal
