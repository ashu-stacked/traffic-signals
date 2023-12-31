import React from 'react'

const Lights = ({color,currentActive}) => {
    console.log("color",color)
    console.log("currentActive",currentActive)
  return (
    <div 
    className = {`bg-${color === currentActive ? color : 'slate'}-500 border-2 border-black w-16 h-16 rounded-lg`}
    />
  )
}

export default Lights