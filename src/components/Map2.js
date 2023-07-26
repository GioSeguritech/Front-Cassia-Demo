import React,{ useEffect, useRef } from 'react';
import createPlotlyComponent from 'react-plotly.js/factory';
import Plotly from 'plotly.js'

const Plot = createPlotlyComponent(Plotly);


const Map =({latitudes,longitudes,locations,mapContainerRef,props})=>{
  // console.log(latitudes,longitudes)
  
  useEffect(() => {
    const handleResize = () => {
      console.log("resizase")
      Plotly.Plots.resize(mapContainerRef.current);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMarkerClick = (data) => {
    console.log('Marcador clickeado:', data);
    // Realiza las acciones deseadas al hacer clic en el marcador
  };
    Plotly.setPlotConfig({

        mapboxAccessToken: "pk.eyJ1IjoiZ2lvcm9jaGEiLCJhIjoiY2xpZWNhamQyMHp1azNlcGZ1YzhkOTVkayJ9.UCQO5iz1kFd9lMRxfUPSXA"
      
      })
      const icon={"height":15,"width":15,"viewBox":["0","0","15","15"],
      "pathData":[{"d":"M7.5,0C3.919,0,1,2.919,1,6.5c0,2.3161,1.2251,4.3484,3.0566,5.5H4l-1,2h9l-1-2h-0.0566\n\tC12.7749,10.8484,14,8.8161,14,6.5C14,2.919,11.081,0,7.5,0z M7.375,1.5059v3.5c-0.3108,0.026-0.6057,0.1482-0.8438,0.3496\n\tL4.0566,2.8809C4.9243,2.0555,6.0851,1.5376,7.375,1.5059z M7.625,1.5059c1.2899,0.0317,2.4507,0.5496,3.3184,1.375L8.4688,5.3555\n\tc-0.0007-0.0007-0.0013-0.0013-0.002-0.002C8.229,5.1532,7.9348,5.0317,7.625,5.0059V1.5059z M3.8809,3.0566l2.4746,2.4746\n\tc-0.0007,0.0007-0.0013,0.0013-0.002,0.002C6.1532,5.771,6.0317,6.0652,6.0059,6.375h-3.5\n\tC2.5376,5.0851,3.0555,3.9243,3.8809,3.0566z M11.1191,3.0566c0.8254,0.8676,1.3433,2.0285,1.375,3.3184h-3.5\n\tc-0.026-0.3108-0.1482-0.6057-0.3496-0.8438L11.1191,3.0566z M2.5059,6.625h3.5c0.026,0.3108,0.1482,0.6057,0.3496,0.8438\n\tL3.8809,9.9434C3.0555,9.0757,2.5376,7.9149,2.5059,6.625z M8.9941,6.625h3.5c-0.0317,1.2899-0.5496,2.4507-1.375,3.3184\n\tL8.6445,7.4688c0.0007-0.0007,0.0013-0.0013,0.002-0.002C8.8468,7.229,8.9683,6.9348,8.9941,6.625z M6.5312,7.6445\n\tc0.0007,0.0007,0.0013,0.0013,0.002,0.002C6.6716,7.7624,6.8297,7.8524,7,7.9121v3.5625c-1.1403-0.1124-2.1606-0.6108-2.9434-1.3555\n\tL6.5312,7.6445z M8.4688,7.6445l2.4746,2.4746c-0.7828,0.7447-1.803,1.243-2.9434,1.3555V7.9121\n\tC8.1711,7.852,8.33,7.7613,8.4688,7.6445z"}]}
      const data=latitudes
      // const data = [
      //   {
      //     type: 'scattermapbox',
      //     lat: [21.008690, 21.010472],
      //     lon: [-101.252420, -101.250583],
      //     text: locations,
      //     mode: 'markers+lines',
      //     line: {width: 1,color: '#4fb7f3'},
      //     opacity: 0.5,
      //     marker: {size:10,color:'#b6ff4b',},
      //     // onHover={(data) => console.log('Marcador hover:', data)}
          
      //   },
      //   {
      //     type: 'scattermapbox',
      //     lat: [21.021170,21.017861],
      //     lon: [-101.258640,-101.258083],
      //     text: locations,
      //     mode: 'markers+lines',
      //     line: {width: 1,color: '#4fb7f3'},
      //     opacity: 0.5,
      //     marker: {size:10,color:'#b6ff4b',},
      //     // onHover={(data) => console.log('Marcador hover:', data)}
          
      //   }

      // ];
    
      const layout =  {
        dragmode: 'zoom',
        // width: 800,
        // height: 600,
        // autosize: true,
        mapbox: {
          center: {
            lat: 21.008690,
            lon: -101.252420
           
          },
          domain: {
            x: [0, 1],
            y: [0, 1]
          },
          style: 'dark',
          // zoom: 2
          zoom:13
        },
        margin: {
          r: 0,
          t: 0,
          b: 0,
          l: 0,
          pad: 0
        },
        autosize: true,
        paper_bgcolor: '#191A1A',
        plot_bgcolor: '#191A1A',
        showlegend: false
     };
    
      return <Plot responsive={true} data={data} config={{ displayModeBar: false }} layout={layout} style={{ width: '100%',height:'100%', fontWeight: '900' }}  onClick={handleMarkerClick}/>;
}

  
export default Map