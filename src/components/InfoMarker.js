import './styles/InfoMarker.css'
import { useState,useEffect } from 'react';
import Action from './Action'
import Modal from 'react-modal';
import Selector from './Selector'
import InputForm from './InputForm';
import LoadAdding from './LoadAdding';
import PingModal from './PingModal';
const pingModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    background: '#363636',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width:'40%',
    height:'30%',
    padding:'20px'
  },
};
const InfoMarker = ({isOpen, data,closeInfoMarker }) => {
    const [exeptionOpen, setExeptionOpen] = useState(false);
    const [addingException, setAddingException] = useState(false);
    const [validaBtn, setValidaBtn] = useState(true);
    console.log('Marcador clickeado:', data);
    console.log(data.points[0].data.customdata[0])
    const actualInfo = data.points[0].data.customdata.find(obj => obj.name === data.points[0].text)
    console.log(actualInfo)
    const fatherInfo=data.points[0].data.customdata[0]
    console.log(fatherInfo)
    const [pingModalOpen, setPingModalOpen] =useState(false);
    const [statusPing, setStatusPing] =useState(false);
  console.log('status ping',statusPing)
  console.log(data.points[0].data.customdata.length)
  function openPingModal() {
    setPingModalOpen(true);
  }

  function closePingModal() {
    setPingModalOpen(false);
  }
  const handlePingClick = (data) => {
    // const dataPing=useFetch('ping','',actualInfo.ip)
    setStatusPing(true)
    openPingModal()
    // Realiza las acciones deseadas al hacer clic en el marcador
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatusPing(false)
        
    }, 5000);

    // Limpiar el temporizador cuando el componente se desmonte o se actualice
    return () => clearTimeout(timer);
  }, [statusPing]); 
    return (
      <>
        <div className='menuAlertTitle'>
                        <div className='cardTitle cardTitle'>
                            <div className='textCardTitle'>
                            Informacion General
                            </div>
                            <div className='imgCardTitle'>
                              <div className='imgContent'>
                              {/* <img src={props.modalIsOpen?"/iconos/minimize.svg":"/iconos/maximize.svg"}  className="expandLogo" alt="Logo" onClick={props.action}/> */}
                              </div>
                            </div>
                        </div>
                        
              </div>
              <div className='menuAlertTabla' >
                <div className='TableHeader'>
                  
                  <div className='headerCell' style={{width:'10%'}}>
                    <div className='txtHeaderCell' >
                        {/* Severidad */}
                    </div>
                  </div>
                  <div className='headerCell' style={{width:'30%'}}>
                    <div className='txtHeaderCell' >
                        Host
                    </div>
                  </div>
                  <div className='headerCell' style={{width:'20%'}}>
                    <div className='txtHeaderCell'>
                        IP
                    </div>
                  </div>
                  <div className='headerCell' style={{width:'10%'}}>
                    <div className='txtHeaderCell'>
                        {/* IP */}
                        ID
                    </div>
                  </div>
                  <div className='headerCell' style={{width:'5%'}}>
                    <div className='txtHeaderCell'>
                        Nivel
                    </div>
                  </div>
                  <div className='headerCell' style={{width:'15%'}}>
                    <div className='txtHeaderCell'>
                    { fatherInfo.alineacion===0?'Estatus':'Alineación'}
                    </div>
                  </div>
                  <div className='headerCell'style={{width:'9%'}}>
                    <div className='txtHeaderCell'>
                        Hora
                    </div>
                  </div>
                </div>
                <div className='TableBody'>
                  <div className={'rowInfo '/*+props.data.Estatus*/} >
                  <div className='problemCell ' style={{width:'6%'}}>
                   </div>
                  <div className='problemCell' style={{width:'33%'}}>
                    <div className='txtProblemCell' >
                      {actualInfo.name}
                    
                    </div>
                  </div>
                  <div className='problemCell' style={{width:'22%'}}>
                    <div className='txtProblemCell'>
                      {actualInfo.ip}
                    
                    </div>
                  </div>
                  <div className='problemCell' style={{width:'10%'}}>
                    <div className='txtProblemCell'>
                      {actualInfo.id}
                    
                    </div>
                  </div>
                  <div className='problemCell' style={{width:'5%'}}>
                    <div className='txtProblemCell'>
                      {actualInfo.nivel}
                    
                    </div>
                  </div>
                  <div className='problemCell' style={{width:'15%'}}>
                    <div className='txtProblemCell'>
                    { fatherInfo.alineacion===0?'':fatherInfo.alineacion}
                    
                    </div>
                  </div>
                  </div>
                  { fatherInfo.alineacion===0?
                  <>
                  <div className='rowcontActions' style={{width: "100%",height:'20%',top: '10%'}}>
                  <div className='menuActiontitle' style={{width: "100%"}}>
                    <div className='actionsTitle'>
                    <div className='textCardTitle'>
                             ANTENA:
                              </div>
                              
                    </div>
                    <hr className='lineTitle'></hr>
                  </div>
                  </div>
                  <div className={'rowInfo '/*+props.data.Estatus*/} >
                  <div className='problemCell ' style={{width:'6%'}}>
                   </div>
                  <div className='problemCell' style={{width:'33%'}}>
                    <div className='txtProblemCell' >
                      {fatherInfo.name}
                    
                    </div>
                  </div>
                  <div className='problemCell' style={{width:'22%'}}>
                    <div className='txtProblemCell'>
                      {fatherInfo.ip}
                    
                    </div>
                  </div>
                  <div className='problemCell' style={{width:'10%'}}>
                    <div className='txtProblemCell'>
                      {fatherInfo.id}
                    
                    </div>
                  </div>
                  <div className='problemCell' style={{width:'5%'}}>
                    <div className='txtProblemCell'>
                      {fatherInfo.nivel}
                    
                    </div>
                  </div>
                  
                  </div>
                  </>
                  :''}
                  <div className='rowcontActions' style={{width: "100%",height:'30%',top: '10%'}}>
                  <div className='menuActiontitle' style={{width: "100%"}}>
                    <div className='actionsTitle'>
                    <div className='textCardTitle'>
                              ACCIONES:
                              </div>
                              
                    </div>
                    <hr className='lineTitle'></hr>
                  </div>
                  <div className='menuActionData' style={{display:'flex'}}>
                          <div className='menuActionCell' style={{border: 'unset',width:'25%'}}>
                              <Action origen='General' disabled={false} titulo='PING' action={handlePingClick}/>
                          </div>
                          <div className='menuActionCell' style={{border: 'unset',width:'25%'}}>
                              <Action origen='General' disabled={true} titulo='Accion 2'/>
                          </div>
                          <div className='menuActionCell' style={{border: 'unset',width:'25%'}}>
                              <Action origen='General' disabled={true} titulo='Accion 3'/>
                          </div>
                          <div className='menuActionCell' style={{border: 'unset',width:'25%'}}>
                          <Action origen='Alert' disabled={false} titulo='Salir' action={closeInfoMarker} />
                              {/* <Action origen='General' disabled={true} titulo='Accion 4'/> */}
                          </div>
                      </div>
                  </div>
                  
                </div>
              </div>
              <Modal
          isOpen={pingModalOpen}
          // onAfterOpen={afterOpenExeption}
          onRequestClose={closePingModal}
          style={pingModalStyles}
          contentLabel="Example Modal2"
          // shouldCloseOnOverlayClick={false}
          >
            <PingModal isOpen={pingModalOpen} data={data.points[0].data.customdata} statusPing={statusPing} closePingModal={closePingModal}></PingModal>
      </Modal>
</>
    );
  };

  export default InfoMarker