import React from 'react'

const ButtonAdd = ({src, handleNewExponse}) => {
  return (
    <div className="fixed rounded-full z-50 bg-white bottom-4 right-4 border-2 text-2xl md:text-3xl flex items-center justify-center shadow-lg shadow-blue-800 overflow-x-hidden overflow-y-hidden">
      <img
        className='hover:cursor-pointer h-16'
        src={src} alt='Icon of new budget'
        onClick={handleNewExponse}
      />
    </div>
  )
}

export default ButtonAdd
