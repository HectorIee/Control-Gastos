import React from 'react'
import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css';
import { formatDate } from '../helpers'

import SavingIcon from '../img/icono_ahorro.svg'
import HomeIcon from '../img/icono_casa.svg'
import FoodIcon from '../img/icono_comida.svg'
import ExpenseIcon from '../img/icono_gastos.svg'
import LeisureIcon from '../img/icono_ocio.svg'
import HealthIcon from '../img/icono_salud.svg'
import SubscritionIcon from '../img/icono_suscripciones.svg'

const diccionaryIcons = {
  AHORRO: SavingIcon, COMIDA: FoodIcon, CASA: HomeIcon, GASTOS: ExpenseIcon,
  OCIO: LeisureIcon, SALUD: HealthIcon, SUSCRIPCIONES: SubscritionIcon,
}

const Expense = ({ gasto, setGastoEditar, deleteExpense }) => {
  const { categoria, nombre, cantidad, id, fecha } = gasto

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setGastoEditar(gasto)}>
        Editar
      </SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        onClick={() => deleteExpense(id)}
        destructive={true}
      >
        Eliminar
      </SwipeAction>
    </TrailingActions>
  )

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className='flex flex-col md:flex-row w-full bg-white p-5 mb-5 justify-between items-center shadow-md shadow-gray-500 rounded-lg'>
          <div className="flex items-center gap-2">
            <img
              className='w-20 mx-1 md:mx-4'
              src={diccionaryIcons[categoria]} alt='Iconos'
            />
            <div className='text-base font-black uppercase'>
              <p className='text-base font-semibold mb-2'>{categoria}</p>
              <p className='text-lg font-bold hover:cursor-pointer mb-2'>{nombre}</p>
              <p className='text-sm font-black mb-2'>
                Agregado el {''}
                <span className='font-normal'>{formatDate(fecha)}</span>
              </p>
            </div>
          </div>
          <p className='md:text-lg lg:text-xl text-black font-black mx-5 mt-2'>$ {cantidad}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default Expense
