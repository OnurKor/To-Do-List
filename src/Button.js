import React from 'react'

const Button = ({size, color, func, content, textColor, disable}) => {
  console.log(`${color}`)
  console.log(`${size}`)
  console.log(`${textColor}`)
  return (
<button className={`${size === "sm" && "w-[150px]"} ${size === "md" && "w-[300px]"} ${size === "lg" && "w-full"} border bg-${color}-500 text-${textColor}-300`} onClick={func} disabled={disable}>{content}</button>
  ) 
}

export default Button