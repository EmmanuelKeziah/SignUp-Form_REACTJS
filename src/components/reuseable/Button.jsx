import React from 'react'

const Button = ({ label, textColor, borderColor, bgColor,}) => {
  return (
    <button style={{
      label: `${label}`,
      color: `${textColor}`,
      border: `1px solid ${borderColor}`,
      backgroundColor: `${bgColor}`,
    }} 
    className='px-5 py-2 flex rounded-xl items-center w-max cursor-pointer'>
      <span className="mr-2">
        {label}
      </span>
          
    </button>
  )
}

export default Button;