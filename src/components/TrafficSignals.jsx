import React from 'react'
import Lights from './Lights'

const TrafficSignals = ({config}) => {
const initialColor = 'red'    
const [currentActive,setCurrentActive]  = React.useState(initialColor)

React.useEffect(()=>{
const {duration,next} = config[currentActive];
const timer = setTimeout(()=>{
  setCurrentActive(next)
},duration)
return (()=>{
    clearTimeout(timer);
})
},[currentActive])
 
console.log("config",config)
  return (
    <div className="flex flex-col space-y-4 border-slate-200 border-2 p-8 rounded-lg bg-slate-500">
        {Object.keys(config).map((light)=>{
            return <Lights color={light} currentActive ={currentActive}  key ={light}/>
        })}
    </div>
  )
}

export default TrafficSignals