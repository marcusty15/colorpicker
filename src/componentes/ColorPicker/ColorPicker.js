import React, {useState} from 'react'
import '../../componentes/ColorPicker/ColorPicker.css'



const ColorPicker = () => {
    const [color, setColor] = useState("#fff");
    console.log(color)
    const changeColor = (e) =>{
       setColor(e.target.value)
    }
    
   
   
  return (
    <>  
        <div className='colorp'>
        <div id='entrada'className='shadow'>
        <h2>Color Picker</h2>
        <div id='inputs'>
        <style>{' .colorp {background-color: '+color+';}' }</style>
        <input  type="color" value={color} onChange={(e)=>{changeColor(e)}}/>
        <input  type='text' value={color} onChange={(e)=>{changeColor(e)}}/>
        </div>
        </div>
        </div>
    </>
  )
}

export default ColorPicker





