import React from 'react'

const Button = ({bg,text,title}) => {
  return (
    <div className={`bg-amber-400 px-4 py-2 rounded-md`}>{title}</div>
  )
}

export default Button