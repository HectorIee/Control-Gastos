import { useState, useEffect } from 'react';
import Header from './components/Header'
import Filterss from './components/Filterss';
import Modal from './components/Modal';
import { generateId } from './helpers';
import NewExpenseIcon from './img/nuevo-gasto.svg'
import ExpensesList from './components/ExpensesList';
import ButtonAdd from './components/ButtonAdd';

function App() {
  const [gastos, setGastos] = useState([
    ...(JSON.parse(localStorage.getItem("gastos")) ?? [])
  ]);
  const [budget, setBudget] = useState(Number(localStorage.getItem('presupuesto') ?? 0));
  const [isValid, setIsValid] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastoEditar, setGastoEditar] = useState({});

  const [filtro, setFiltro] = useState('');
  const [gastosFiltro, setGastosFiltro] = useState([]);

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true)
      setTimeout(() => {
        setAnimarModal(true)
      }, 500);
    }
  }, [gastoEditar])

  useEffect(() => {
    localStorage.setItem('presupuesto', budget ?? 0)
  }, [budget])

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
  }, [gastos])

  useEffect(() => {
    if (filtro) {
      const gastosFiltrados = gastos.filter(expense => expense.categoria === filtro)
      setGastosFiltro(gastosFiltrados)
    }
  }, [filtro])

  useEffect(() => {
    const budgetLS = Number(localStorage.getItem('presupuesto')) ?? 0
    if (budgetLS > 0) {
      setIsValid(true)
    }
  }, [])

  /* Abrir animacion de nuevo gasto */
  const handleNewExponse = () => {
    setModal(true)
    setGastoEditar({})
    setTimeout(() => {
      setAnimarModal(true)
    }, 500);
  }

  /* Salvar el gasto realizado  */
  const saveExpense = (expense) => {
    if (expense.id) {
      //Actualizar
      const updateExpenses = gastos.map(gastoState => gastoState.id === expense.id ? expense : gastoState)
      setGastos(updateExpenses)
      setGastoEditar({})
    } else {
      //Nuevo Gasto
      expense.id = generateId()
      expense.fecha = Date.now()
      setGastos([...gastos, expense])
    }
    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    }, 800);
  }

  /* Eliminar el Gasto */
  const deleteExpense = id => {
    const updateExpenses = gastos.filter(gasto => gasto.id !== id);
    setGastos(updateExpenses)
  }

  return (
    <div className={modal ? 'overflow-hidden h-screen' : ''}>
      <Header
        gastos={gastos} setGastos={setGastos}
        budget={budget} setBudget={setBudget}
        isValid={isValid} setIsValid={setIsValid}
      />

      {isValid ? (
        <div className='w-full'>
          <main>
            <Filterss
              filtro={filtro} setFiltro={setFiltro}
            />
            <ExpensesList
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              deleteExpense={deleteExpense}
              filtro={filtro}
              gastosFiltro={gastosFiltro}
            />
          </main>

          <ButtonAdd
            src={NewExpenseIcon}
            handleNewExponse={handleNewExponse}
          />
        </div>
      ) : null}

      {modal && <Modal
        setModal={setModal}
        animarModal={animarModal} setAnimarModal={setAnimarModal}
        saveExpense={saveExpense}
        gastoEditar={gastoEditar} setGastoEditar={setGastoEditar}
      />}

    </div>
  )
}

export default App
