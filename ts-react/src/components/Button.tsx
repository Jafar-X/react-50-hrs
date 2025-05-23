import React from 'react'

interface ButtonProps {
  label: string,
  onClick: () => void,
  disabled: boolean,
}

const Button = ({label, onClick, disabled}: ButtonProps) => {
  return (
    <div>
      <button onClick={onClick} disabled={disabled}>{label}</button>
    </div>
  )
}

export default Button