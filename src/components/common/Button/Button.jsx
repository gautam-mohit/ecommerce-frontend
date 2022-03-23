import React from 'react'

export default function Button({text, onClick, type, className}) {
  return (
    <button className={`${type==='primary'?'bg-yellow-400': 'bg-orange-500'} py-3 text-gray-50 font-extrabold ${className}`} onClick={onClick}>
      {text}
    </button>
  )
}
