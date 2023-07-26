import './styles/LeftQuadrant.css'
// import Map from './Map'
import Map from './Map'
import {fetchData} from '../hooks/fetchData'
import hosts from './devices'
import { Suspense, useEffect, useState,useRef } from 'react'
import { useFetch } from '../hooks/useFetch'
import ReactDOM from 'react-dom';
import React from 'react';
import Modal from 'react-modal';
import LoadData from './LoadData'
import InfoMarker from './InfoMarker'

import RowProblem from './RowProblem'
import TableAlerts from './TableAlerts'
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    background: '#363636',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width:'80%',
    height:'80%',
    padding:'20px'
  },
};
const infoMarkerStyles = {
  content: {
    top: '50%',
    left: '50%',
    background: '#363636',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width:'70%',
    height:'40%',
    padding:'20px'
  },
};
const LeftQuadrant =(props)=>{
 
  // let dataProblems=useFetch('problems',props.ubicacion.groupid,props.token)
 

  const mapContainerRef = useRef(null);
  
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const [infoMarkerOpen, setInfoMarkerOpen] = React.useState(false);
  const  [infoMarker, setInfoMarker]=useState([])
  function openInfoMarker() {
    setInfoMarkerOpen(true);
  }

  function closeInfoMarker() {
    setInfoMarkerOpen(false);
  }
  const handleMarkerClick = (data) => {
    
    setInfoMarker(data)
    openInfoMarker()
    // Realiza las acciones deseadas al hacer clic en el marcador
  };
    return(
      <>
      
        <div className='rowQuadrant leftQuadrant'>
      
          <div className='columnLeft columnMap'>
            <div className='card' style={{width:'95%',border: 'solid #004d79'}} ref={mapContainerRef} >
              {props.dataHosts.loading?<LoadData/>:<Map mapContainerRef={mapContainerRef} latitudes={props.latitudes} longitudes={props.longitudes} locations={props.locations} handleMarkerClick={handleMarkerClick} props={props}/>}
              
              
              
            </div>
          </div>
          <div className='columnLeft columnAlert'>
            <div className='card' style={{width:'95%'}}>
              <TableAlerts action={openModal} modalIsOpen={false}  dataProblems={props.dataProblems} ubicacion={props.ubicacion} setUbicacion={props.setUbicacion}></TableAlerts>
              {/* <div className='menuAlertTitle'>
                        <div className='cardTitle cardTitleAlert'>
                            <div className='textCardTitle'>
                            ALERTAS
                            </div>
                            <div className='imgCardTitle'>
                              <div className='imgContent'>
                              <img src="expandir-flechas.png"  className="expandLogo" alt="Logo" onClick={openModal}/>
                              </div>
                            </div>
                        </div>
                        
              </div>
              <div className='menuAlertTabla' >
                <div className='TableHeader'>
                  
                  <div className='headerCell' style={{width:'10%'}}>
                    <div className='txtHeaderCell' >
                        Severidad
                    </div>
                  </div>
                  <div className='headerCell' style={{width:'30%'}}>
                    <div className='txtHeaderCell' >
                        Host
                    </div>
                  </div>
                  <div className='headerCell' style={{width:'20%'}}>
                    <div className='txtHeaderCell'>
                        Problema
                    </div>
                  </div>
                  <div className='headerCell' style={{width:'10%'}}>
                    <div className='txtHeaderCell'>
                        IP
                    </div>
                  </div>
                  <div className='headerCell' style={{width:'5%'}}>
                    <div className='txtHeaderCell'>
                        Ack
                    </div>
                  </div>
                  <div className='headerCell' style={{width:'15%'}}>
                    <div className='txtHeaderCell'>
                        Ack_message
                    </div>
                  </div>
                  <div className='headerCell'style={{width:'9%'}}>
                    <div className='txtHeaderCell'>
                        Hora
                    </div>
                  </div>
                </div>
                <div className='TableBody'>
                {
                  // dataAlerts.loading?<h1>ola</h1>:<h1>adios</h1>
                  // dataAlerts.data.map(data=>{
                    <>
                    <RowProblem severity={1} />
                    <RowProblem severity={2}/>
                    <RowProblem severity={3}/>
                    <RowProblem severity={4} />
                    <RowProblem severity={2}/>
                    <RowProblem severity={3}/>
                    </>
                    
                  // })
                }
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <TableAlerts action={closeModal}  modalIsOpen={true} dataProblems={props.dataProblems} ubicacion={props.ubicacion} setUbicacion={props.setUbicacion} ></TableAlerts>
      </Modal>

      <Modal
          isOpen={infoMarkerOpen}
          // onAfterOpen={afterOpenExeption}
          onRequestClose={closeInfoMarker}
          style={infoMarkerStyles}
          contentLabel="Example Modal2"
          // shouldCloseOnOverlayClick={false}
          >
            <InfoMarker isOpen={infoMarkerOpen} data={infoMarker} closeInfoMarker={closeInfoMarker}></InfoMarker>
      </Modal>
      </>
    )
}

export default LeftQuadrant