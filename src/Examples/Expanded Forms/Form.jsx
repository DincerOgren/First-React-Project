
import { useState } from 'react'
import './Form.css'

function App(){
    
    
    const [formData,setFormData] = useState({
        name:"",
        checkbox:false,
        radio:'',
        select:''

    })

    const [errors,setErrors] = useState([]);

    const validate = ()=>{
        const newErrors = [];
        if(!formData.name.trim())
        {
            newErrors.name='Name is required!';
        }

        return newErrors;
    }

    const handleChange= (e)=>{
        const {name,value,type,checked}=e.target
        
        setFormData({...formData,
            [name]: type==='checkbox' ? checked : value
        })

        if(errors[name]){
            const newErrors = {...errors};
            delete newErrors[name];
            setErrors(newErrors);
        }

    }

    const handleSubmit= (e)=>{
        e.preventDefault();
        const validationErrors=validate();
        if(Object.keys(validationErrors).length>0){
            setErrors(validationErrors);

        } else {
            
            console.log("Form submitted. ",formData);
        }
    }
    return(
        <div>
            <h1>Form Example</h1>
            <form onSubmit={handleSubmit}>
                {/* Text  */}
                <div>
                    <label>Name:</label>
                    <input type='text' name='name'
                            value={formData.text}
                            onChange={handleChange}></input>
                    {errors.name && <span style={{color:'red'}}>{errors.name}</span>}
                    <br/>
                </div>
                {/* Checkbox */}
                <div>
                    <label>
                        <input type='checkbox'
                                name='checkbox'
                                checked={formData.checkBox}
                                onChange={handleChange}></input>
                        Checkbox

                    </label>
                    
                </div>

                    {/* radio button */}
                <div>

                    <label>Radio: </label>
                    <label>
                        <input type='radio'
                                name='radio'
                                value='option1'
                                checked={formData.radio === 'option1'}
                                onChange={handleChange}>
                                
                        </input>
                        Option 1

                    </label>
                    <label>
                        <input type='radio'
                                name='radio'
                                value='option2'
                                checked={formData.radio === 'option2'}
                                onChange={handleChange}>
                                
                        </input>
                        Option 2

                    </label>
                    
                </div>
                {/* Dropdown */}
                <div>
                    <label>Select: </label>
                    <select name='select' value={formData.select}
                            onChange={handleChange}>
                        <option value="">-- Choose an option --</option>
                        <option value="option1">Option1</option>
                        <option value="option2">Option2</option>

                    </select>

                    <button tpye='submit'>Submit</button>

                </div>

                {/* form data */}
                <div>
                    <h3>Form Data</h3>
                    <p><strong>Text: </strong> {formData.text || "N/A"}  </p>
                    <p><strong>Checkbox: </strong> {formData.checkbox ? "true" : "false"}  </p>
                    <p><strong>Radio: </strong> {formData.radio || "N/A"}  </p>
                    <p><strong>Select: </strong> {formData.select || "N/A"}  </p>
                </div>
            </form>


        </div>
    )

}

export default App