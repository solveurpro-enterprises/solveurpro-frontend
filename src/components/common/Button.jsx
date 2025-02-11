import React from 'react'

const Button = ({bg,text,title}) => {
  return (
    <div className={`bg-[#525FE1] px-3 py-1 rounded-md text-white` }>{title}</div>
  )
}

export default Button