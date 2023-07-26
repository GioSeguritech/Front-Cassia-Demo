import './styles/MenuAlert.css'
import { useState,useEffect } from 'react';
import Action from './Action'
import Modal from 'react-modal';
import Selector from './Selector'
import InputForm from './InputForm';
import LoadAdding from './LoadAdding';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      background: 'transparent',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width:'30%',
      height:'50%',
      padding:'20px',
      border:'unset'
    },
  };
const MenuAlert = ({ isOpen, onClose,props }) => {
  
    const [exeptionOpen, setExeptionOpen] = useState(false);
    const [addingException, setAddingException] = useState(false);
    const [validaBtn, setValidaBtn] = useState(true);
    const addException=()=>{
      console.log("exepcio" )
      console.log(props)
      setAddingException(true)
      
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            closeExeption()
            
        }, 3000);
    
        // Limpiar el temporizador cuando el componente se desmonte o se actualice
        return () => clearTimeout(timer);
      }, [addingException]); 
    function openExeption() {
      setExeptionOpen(true);
      console.log(props)
    }
  
    function afterOpenExeption() {
      // references are now sync'd and can be accessed.
      // subtitle.style.color = '#f00';
    }
  
    function closeExeption() {
      setExeptionOpen(false);
      setAddingException(false)
    }
    return (
      <>
        {isOpen && (
          <>
          <div className="expandInfo">
            <div className="contExpandInfo">
              <div className='rowExpand' style={{width: '75%'}}>
                <div className='infoCont'>
                    <div className='headContent'>
                      <div className='rowHeadExpand'>
                        <div className='textRowHeadExpand'> 
                          host
                        </div>
                      </div>
                      <div className='rowHeadExpand'>
                        <div className='textRowHeadExpand'> 
                          problema
                        </div>
                      </div>
                      <div className='rowHeadExpand'>
                        <div className='textRowHeadExpand'> 
                        Ack message
                        </div>
                      </div>
                      <div className='rowHeadExpand'>
                        <div className='textRowHeadExpand'> 
                        Excepción
                        </div>
                      </div>
                    </div>
                    <div className='detailContent'>
                      <div className='rowDetailExpand'>
                        <div className='textRowDetailExpand'> 
                          {props.data.Host}
                        </div>
                      </div>
                      <div className='rowDetailExpand'>
                        <div className='textRowDetailExpand'> 
                          {props.data.Problem}
                        </div>
                      </div>
                      <div className='rowDetailExpand'>
                        <div className='textRowDetailExpand'> 
                          {props.data.Ack_message}
                          {/* {props.data.latitude},{props.data.longitude} */}
                        </div>
                      </div>
                      <div className='rowDetailExpand'>
                        <div className='textRowDetailExpand'> 
                          {props.data.Ack_message}
                          {/* {props.data.latitude},{props.data.longitude} */}
                        </div>
                      </div>
                    </div>
                </div>
              </div>
              <div className='rowExpand' style={{width: '25%'}}>
                <div className='rowcontActions'>
                  <div className='menuActiontitle' style={{width: "100%"}}>
                    <div className='actionsTitle'>
                    <div className='textCardTitle'>
                              ACCIONES:
                              </div>
                              
                    </div>
                    <hr className='lineTitle'></hr>
                  </div>
                  <div className='menuActionData'>
                          <div className='menuActionCell' style={{border: 'unset'}}>
                              <Action origen='Alert' disabled={false} titulo='excepcion' action={openExeption}/>
                          </div>
                          <div className='menuActionCell' style={{border: 'unset'}}>
                              <Action origen='Alert' disabled={true} titulo='Accion 2'/>
                          </div>
                          <div className='menuActionCell' style={{border: 'unset'}}>
                              <Action origen='Alert' disabled={true} titulo='Accion 3'/>
                          </div>
                          <div className='menuActionCell' style={{border: 'unset'}}>
                              <Action origen='Alert' disabled={true} titulo='Accion 4'/>
                          </div>
                      </div>
                </div>
              </div>
              
              {/* <button onClick={onClose}>Close</button> */}
            </div>
          </div>
          <Modal
          isOpen={exeptionOpen}
          onAfterOpen={afterOpenExeption}
          onRequestClose={closeExeption}
          style={customStyles}
          contentLabel="Example Modal"
          shouldCloseOnOverlayClick={false}
            >
                <div className='exceptCont card'>
                <div className='menuActiontitle' style={{width: "100%"}}>
                <div className='cardTitle cardTitleAlert' >
                            <div className='textCardTitle'>
                            CREAR EXCEPCION:
                            </div>
                        </div>
                    </div>
                    <div className='formCont'>
                        <div className='formCompact'> 
                        {addingException?<LoadAdding/>:
                        <>
                        <div className='formColumn'>
                            <InputForm   titulo='Event ID' text={props.data.eventid} disabled={true} ></InputForm>
                            </div>
                            <div className='formColumn'>
                            <Selector data={props.dataAgencies.data.data} loading={props.dataAgencies.loading}  titulo='Agencia' props={props}></Selector>
                            </div>
                            <div className='formColumn'>
                            <InputForm data={[]} loading={false} text='' setValidaBtn={setValidaBtn} titulo='Notas' disabled={false}></InputForm>
                            </div>
                            <div className='formColumn'>
                            {/* <InputForm data={[]} loading={false} text='' titulo='Notas' disabled={false}></InputForm> */}
                            </div>
                            <div className='formColumn'>
                            <Action origen='Alert' titulo='EJECUTAR' action={addException} disabled={validaBtn}/>
                            <Action origen='Alert' titulo='CANCELAR' action={closeExeption} disabled={false} />
                            </div>
                        
                        </>
                        }  
                        </div> 
                    </div>
                </div>
            </Modal>
        </>
        )}
      </>
    );
  };

  export default MenuAlert