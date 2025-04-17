import { useState } from "react"
import './ColorPicker.css'

function App(){

    const [backgroundColor, setBackgroundColor] = useState('#ffffff')


    const colors = ['#ff0000','#33FFF5','#F5FF33','#FF33F5','#3357FF','#FF5733']


    const handleColorChange = (color) =>
    {
        setBackgroundColor(color)
    }
    return(
        <div className='App' style={{backgroundColor:backgroundColor}}>
            <h1>Color Picker</h1>
            <div className='color-palette'>
        	    {colors.map((color,index) =>(
                    <div key = {index}
                        className="color-box"
                        onClick={()=> handleColorChange(color)}
                        style={{backgroundColor:color}}>
                        
                    </div>
                ))}
            </div>

            <div className="custom-picker">
                <input type='color'
                        value={backgroundColor}
                        onChange={(e)=>handleColorChange(e.target.value)}></input>
            </div>

        </div>
    )
}


export default App