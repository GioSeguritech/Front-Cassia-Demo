import React from 'react';
import createPlotlyComponent from 'react-plotly.js/factory';
import Plotly from 'plotly.js'
import { useEffect } from 'react';
import turf from 'turf';
const Plot = createPlotlyComponent(Plotly);


const Map =({latitudes,longitudes,locations,handleMarkerClick,props})=>{
  console.log(latitudes)
// const Map =()=>{
 
    Plotly.setPlotConfig({

        mapboxAccessToken: "pk.eyJ1IjoiZ2lvcm9jaGEiLCJhIjoiY2xpZWNhamQyMHp1azNlcGZ1YzhkOTVkayJ9.UCQO5iz1kFd9lMRxfUPSXA"
      
      })
      
      const data = latitudes
      // const data = [
      //   {
      //     type: 'scattermapbox',
      //     lat: [ '21.104694' ],
      //     lon: [ '-101.695306' ],
      //     text: [ "LEON-CUL01-CCTV-CAMBIUM_NETWORKS-PMP450i-SUSCRIPTOR-SUSCRIPTOR-GTO-VVL-LEON-001" ],
      //     mode: 'markers',
      //     marker: {
      //       size:14,
      //       color:'#b6ff4b',
      //       symbol: 'square'
           
      //     },
      //     hovertemplate:
      //       "<b>%{customdata.id}...</b><br><br>",
      //       hoverlabel: {
      //         namelength: 10, // Establece el tamaño máximo del hovertemplate
      //       },
      //       customdata: [
      //         {
      //           nivel: 1,
      //           name: 'hostidP.Host',
      //           ip: 'goi.ip',
      //           id: 'gio.hostidcon',
      //         },
      //       ],
      //     // onHover={(data) => console.log('Marcador hover:', data)}
          
      //   },

      // ];
      const customMarkers = [
        {
          name: 'custom-marker', // Nombre del símbolo
          path: 'M10,0 A10,10 0 1,0 10,20 A10,10 0 1,0 10,0', // Definición del icono personalizado (puedes utilizar SVG o otras formas)
        },
      ];
      const layout =  {
        autosize: true,
  hovermode:'closest',
        mapbox: {
          center: {
            // lat: 20.5294858,
            // lon: -100.7541315
            lat: props.ubicacion.latitud,
            lon: props.ubicacion.longitud,
          },
          domain: {
            x: [0, 1],
            y: [0, 1]
          },
          style: 'dark',
          // zoom: props.ubicacion.zoom
          zoom:10
        },
        margin: {
          r: 0,
          t: 0,
          b: 0,
          l: 0,
          pad: 0
        },
        config: { responsive: true },
        paper_bgcolor: '#191A1A',
        plot_bgcolor: '#191A1A',
        showlegend: false
     };
      return <Plot id='map' 
            data={data} 
            layout={layout} 
            style={{ width: '100%',height:'100%', fontWeight: '900' }}  
            onClick={handleMarkerClick}
            
            />;
}

  
export default Map