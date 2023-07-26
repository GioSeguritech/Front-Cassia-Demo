import './styles/PingModal.css'
import { useState,useEffect } from 'react';
import Action from './Action'
import Modal from 'react-modal';
import Selector from './Selector'
import InputForm from './InputForm';
import LoadAdding from './LoadAdding';
import { useFetch } from '../hooks/useFetch'
const PingModal = ({isOpen, data,statusPing,closePingModal }) => {
    console.log(data)
    const host=data.length===1?data[0]:data[1]
    console.log("host")
    console.log(host)
    const dataPing=useFetch('hosts/ping',host.id,'','POST')
    
    return (
      <>
        <div className='contPingModal'>
            <div className='titlePinglModal'>
            <div className='actionsTitle'>
                    <div className='textCardTitle'>
                             Estableciendo conexión:
                              </div>
                              
                    </div>
                    <hr className='lineTitlePing'></hr>
            </div>
            <div className='contAnimationPingModal'>
                <div className=' constImg contFirstImg'>
                    <div className='divImgPing'>
                    <img src="antena_1.png"  className='icon-ping' alt="Logo"/>
                    </div>
                    <div className='divtextPing'>
                        {data.length===1?'servidor principal':data[0].ip}
                    </div>
                </div>
                <div className='contAnimation'>
                    {
                        dataPing.loading===true?<section class="dots-container">
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                    </section>:
                    <p className={dataPing.data.data.online==="true"?'msgPing':'msgErrorPing '} >
                         {dataPing.data.data.online==="true"?'Conexión correcta':'Sin conexión'}
                    </p>
                    }
                
                
                </div>
                <div className=' constImg contSecondImg'>
                <div className='divImgPing'>
                    <img src="router_1.png"  className='icon-ping' alt="Logo"/>
                    </div>
                    <div className='divtextPing'>
                    {host.ip}
                    </div>
                </div>
            </div>
            <div className='contActionsPingModal'>
            <div className='menuActionData' style={{display:'flex'}}>
                          <div className='menuActionCell' style={{border: 'unset',width:'25%'}}>
                              <Action origen='Alert' disabled={false} titulo={dataPing.loading===true?'Cancelar':'Salir'} action={closePingModal} />
                          </div>
                          </div>
            </div>
        </div>
             
</>
    );
  };

  export default PingModal