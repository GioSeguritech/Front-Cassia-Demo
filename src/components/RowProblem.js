import './styles/RowProblem.css'
import { useState } from 'react';

import MenuAlert from './MenuAlert';

const RowProblem=(props)=>{
  // const [infoShow,setInfoShow]=useState({severity:0,host:"",problem:"",ip:"",ack:"",ack_message:"",time:""})
  const [menuAlertOpen, setMenuAlertOpen] = useState(false);
  const [color, setColor] = useState('#43434d');

  const openMenuAlert = () => {

    // console.log(props.data.latitude)
    // console.log(props.data.longitude)
    // console.log(props.ubicacion.groupid)
    props.setUbicacion({latitud:props.data.latitude.replace(",", "."),longitud:props.data.longitude.replace(",", "."),zoom:16,groupid:props.ubicacion.groupid,dispId:props.ubicacion.dispId})
    setMenuAlertOpen(true);
  };

  const closeMenuAlert = () => {
    if(props.ubicacion.groupid===0){
      props.setUbicacion({latitud:props.ubicacion.latitud,longitud:props.ubicacion.longitud,zoom:6,groupid:props.ubicacion.groupid,dispId:props.ubicacion.dispId})
    }else{
      props.setUbicacion({latitud:props.ubicacion.latitud,longitud:props.ubicacion.longitud,zoom:11,groupid:props.ubicacion.groupid,dispId:props.ubicacion.dispId})
    }
    setMenuAlertOpen(false);
  };

  
  
    return(
      <>
        <div className={'rowProblem '/*+props.data.Estatus*/} style={{background:menuAlertOpen?'#828291':'#43434d'}} onClick={menuAlertOpen?closeMenuAlert:openMenuAlert}>
        <span className="rowProblem-hover"> </span>
                  <div className='problemCell ' style={{width:'6%'}}>
                    {/* <div className='txtProblemCell' >
                        {props.severity}
                    </div> */}
                    {/* <div className={'sphere s'+props.data.severity}></div> */}
                    <img  src={'/iconos/alert-s'+props.data.severity+'.svg'} className={' s'+props.data.severity} alt="Logo"></img>
                  </div>
                  <div className='problemCell' style={{width:'33%'}}>
                    <div className='txtProblemCell' >
                    {props.data.Host.length > 35 ? `${props.data.Host.slice(0, 35)}...` : props.data.Host}
                    
                    </div>
                  </div>
                  <div className='problemCell' style={{width:'22%'}}>
                    <div className='txtProblemCell'>
                      {props.data.Problem.length > 25 ? `${props.data.Problem.slice(0, 25)}...` : props.data.Problem}
                    
                    </div>
                  </div>
                  <div className='problemCell' style={{width:'10%'}}>
                    <div className='txtProblemCell'>
                    {/* {props.data.ip} */}
                    {props.data.Estatus}
                    </div>
                  </div>
                  <div className='problemCell' style={{width:'5%'}}>
                    <div className='txtProblemCell'>
                    {props.data.Ack}
                    </div>
                  </div>
                  <div className='problemCell' style={{width:'15%'}}>
                    <div className='txtProblemCell'>
                    {props.data.Ack_message.length > 20 ? `${props.data.Ack_message.slice(0, 20)}...` : props.data.Ack_message}
                       {/* {props.data.Ack_message} */}
                    </div>
                  </div>
                  <div className='problemCell'style={{width:'9%'}}>
                    <div className='txtProblemCell'>
                    {props.data.Time.slice(-9)}
                    </div>
                  </div>
                  
      </div>
      <MenuAlert isOpen={menuAlertOpen} props={props} onClose={closeMenuAlert} />
      
      </>
    )
}
export default RowProblem