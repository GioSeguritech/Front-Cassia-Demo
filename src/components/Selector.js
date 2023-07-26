import './styles/Selector.css'
import React, { useState } from 'react'
import Select from 'react-select'
import data_ubi from './ubicaciones'
import { useFetch } from '../hooks/useFetch'
const Selector=({titulo,data,loading,props})=>{
    
    const opt_default=[{ dispId: 0, name: "Todos" }]
    const data_aux=opt_default.concat(data)
   console.log(props.ubicacion)
    const options=loading?{filter:titulo, value: 0, label: 'cargando...' }:data_aux.map(datas=>{
        let op;
        switch(titulo){
            case 'Municipio': op={ filter:titulo,value: datas.groupid === undefined?0:datas.groupid , label: datas.name };
                                break;
            case 'Tecnologia': op={ filter:titulo,value: datas.dispId=== undefined?0:datas.dispId, label: datas.name };
                                break; 
            case 'Subtipo': op={ filter:titulo,value: datas.templateId=== undefined?0:datas.templateId, label: datas.name };
                                break;  
            case 'Agencia': op={ filter:titulo,value: datas.exception_agency_id=== undefined?0:datas.exception_agency_id, label: datas.name };
                                break;                   
            default:
                op={ value: '', label: '' };
                    break;                        
        }
        return op                           // <option key={datas.uuid}> {datas.name} </option>
})
    
    const [value,setValue]=useState({Municipio:''})
    const HandleChange=(selected,name)=>{
        console.log(selected.filter)
        setValue((state)=>({
            ...state,[name]:selected.label
        }))
        switch(selected.filter){
            case 'Municipio': props.setUbicacion({latitud:props.ubicacion.latitud,longitud:props.ubicacion.longitud,groupid:selected.value,dispId:props.ubicacion.dispId,templateId:props.ubicacion.templateId})
                                break;
            case 'Tecnologia': props.setUbicacion({latitud:props.ubicacion.latitud,longitud:props.ubicacion.longitud,groupid:props.ubicacion.groupid,dispId:selected.value,templateId:props.ubicacion.templateId})
                                break; 
            case 'Subtipo': props.setUbicacion({latitud:props.ubicacion.latitud,longitud:props.ubicacion.longitud,groupid:props.ubicacion.groupid,dispId:props.ubicacion.dispId,templateId:selected.value})
                                break;                    
            default:
                    break;                        
        }
        
    }
   
    return(
        <div className='menuSearchOption'>
            <div className='compactSelector'>
                <label htmlFor='selector' className='labelSelector'>{titulo}:</label>
                
                <Select
                    options={options}
                    // options={{filter:titulo, value: 0, label: 'cargando...' }}
                    className="react-select-container"
                    classNamePrefix="react-select"
                    onChange={(selected)=>HandleChange(selected,titulo)}
                    placeholder={loading?'cargando..':titulo}
                    noOptionsMessage={() => "No existe"}
                    isDisabled={loading}
                />
                
            </div>
        </div>
    )
}

export default Selector