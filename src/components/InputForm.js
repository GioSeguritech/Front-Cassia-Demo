import './styles/InputForm.css'
import React, { useState } from 'react'
import Select from 'react-select'
import data_ubi from './ubicaciones'
import { useFetch } from '../hooks/useFetch'
const InputForm=({titulo,data,loading,text,disabled,setValidaBtn})=>{
    
    
    
    const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    if(event.target.value.length === 0){
        setValidaBtn(true)
    }else{
        setValidaBtn(false)
    }
    
    setInputValue(event.target.value);
  };
   
    return(
        <div className='menuSearchOption'>
            <div className='compactInputForm'>
                <label htmlFor='InputForm' className='labelInputForm'>{titulo}:</label>
                
                <input type="text" className="InputForm" value={text==''?inputValue:text}  disabled={disabled} onChange={handleInputChange} />
                
                
            </div>
        </div>
    )
}

export default InputForm