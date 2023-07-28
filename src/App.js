import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import Container from './components/Container'
import RightQuadrant from './components/RightQuadrant'
import LeftQuadrant from './components/LeftQuadrant'
import {  useEffect, useState } from 'react'
import { useFetch } from './hooks/useFetch'



function App() {
const [ubicacion,setUbicacion]=useState({latitud:'21.01808757489169',longitud:'-101.25789252823293',groupid:81,dispId:0,templateId:0})
const [zoom,setZoom]=useState(6)
const [latitudes,setLatitudes]=useState([])
const [longitudes,setLongitudes]=useState([])
const [locations,setLocations]=useState([])
const [token,setToken]=useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqdWFuLm1hcmNpYWwiLCJleHAiOjE2OTA2MzA5MTh9.Cx8RP1WJ4OzSFmXgI9RUsiury2kSPua0tgUARHlhXTg")
const [data,setData]=useState([]);
const [loading,setLoading]=useState(true);
const [error,setError]=useState(null);
const [devices,setDevices]=useState({data:[],loading:true,error:null});

console.log(devices)
console.log(ubicacion)

const [dataProblems,setDataProblems]=useState({data:[],loading:true,error:null})

useEffect(()=>{
  
  search_problems()

},[])
function search_problems(){
setDataProblems({data:dataProblems.data,loading:true,error:dataProblems.error})
  const fetchData = async () => {
    try {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqdWFuLm1hcmNpYWwiLCJleHAiOjE2OTA2MzA5MTh9.Cx8RP1WJ4OzSFmXgI9RUsiury2kSPua0tgUARHlhXTg'; // Reemplaza con tu token de autenticación
      const devicefilter=ubicacion.dispId!==0?'?tech_host_type='+ubicacion.dispId:''
  const subtypefilter=ubicacion.templateId!==0?'subtype='+ubicacion.templateId:''
  let andAux=(devicefilter!=='' )?'&':'?'
        andAux=(subtypefilter!=='')?andAux:''
  console.log('http://172.18.200.14:8000/api/v1/zabbix/problems/'+ubicacion.groupid+''+devicefilter+andAux+subtypefilter)
      const response = await fetch('http://172.18.200.14:8000/api/v1/zabbix/problems/'+ubicacion.groupid+''+devicefilter+andAux+subtypefilter, {                 
                          headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`,
                          },
                        });
      if (response.ok) {
        const response_data = await response.json();
        setDataProblems({data:response_data.data,loading:false,error:dataProblems.error})
        // console.log(response_data)
        
      } else {
        throw new Error('Error en la solicitud');
      }
    } catch (error) {
      // Manejo de errores
      setDataProblems({data:dataProblems.data,loading:dataProblems.loading,error:error})
      console.error(error);
    }
  };
  fetchData();
}






useEffect(()=>{
  search_devices()

},[])
function search_devices(){
  console.log("use efect",ubicacion)
    setLatitudes([])
    setLongitudes([])
    setLocations([])
    setDevices({data:devices.data,loading:true,error:devices.error})
    
    
    const fetchData = async () => {
      try {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqdWFuLm1hcmNpYWwiLCJleHAiOjE2OTA2MzA5MTh9.Cx8RP1WJ4OzSFmXgI9RUsiury2kSPua0tgUARHlhXTg'; // Reemplaza con tu token de autenticación
        // const response = await fetch('http://172.18.200.14:8000/api/v1/zabbix/db/hosts/relations/'+ubicacion.groupid, {
          const devicefilter=ubicacion.dispId!==0?'?dispId='+ubicacion.dispId:''
    const subtypefilter=ubicacion.templateId!==0?'subtype_id='+ubicacion.templateId:''
    let andAux=(devicefilter!=='' )?'&':'?'
          andAux=(subtypefilter!=='')?andAux:''
    console.log('http://172.18.200.14:8000/api/v1/zabbix/hosts/'+ubicacion.groupid+''+devicefilter+andAux+subtypefilter)
          const response = await fetch('http://172.18.200.14:8000/api/v1/zabbix/hosts/'+ubicacion.groupid+''+devicefilter+andAux+subtypefilter, {                 
                            headers: {
                              'Content-Type': 'application/json',
                              Authorization: `Bearer ${token}`,
                            },
                          });
        if (response.ok) {
          const response_data = await response.json();
          setDevices({data:response_data.data,loading:false,error:devices.error})
          // console.log(response_data)
          
        } else {
          throw new Error('Error en la solicitud');
        }
      } catch (error) {
        // Manejo de errores
        setDevices({data:devices.data,loading:devices.loading,error:error})
        console.error(error);
      }
    };
    fetchData();
}
useEffect(()=>{
  console.log(ubicacion.dispId)
  if(devices.data.length!=0){
    
    setLatitudes([]) 
    setLongitudes([])
    if(devices.data.relations.length!=0){
      objeto_relaciones(devices.data)
    }else if(devices.data.subgroup_info.length!=0){
      objeto_subgroup_info(devices.data)
    }else if(devices.data.hosts.length!=0 && ubicacion.dispId===2){
      objeto_antenas(devices.data)
    }
    
    
  }
  
},[devices.data])
function objeto_subgroup_info(devices_data){
  devices_data.subgroup_info.map((host, index, array)=>
      {
        if (index === 1) {
          setUbicacion({latitud:host.Latitude,longitud:host.Longitude,groupid:ubicacion.groupid,dispId:ubicacion.dispId,templateId:ubicacion.templateId})
          console.log('Recorrido completo');
        }
        if(host.length!==0 && host.Latitude.replace(",", ".")>=-90 && host.Latitude.replace(",", ".")<=90 ){
          let colorSG='#1fee08'
          if(host.Alineacion>=-59 && host.Alineacion<=-50){
            colorSG='#ff4fff'
          }else if(host.Alineacion>=-69 && host.Alineacion<=-60){
            colorSG='#71b7f4'
          }else if(host.Alineacion>=-79 && host.Alineacion<=-70){
            colorSG='#dd834e'
          }else if(host.Alineacion<=-80){
            colorSG='#dd4e4e'
          }
          console.log("setLatitu2")
          setLatitudes(latitudes=>[...latitudes,{
              type: 'scattermapbox',
              lat: [host.Latitude],
              lon: [host.Longitude],
              text: [host.host],
              mode: 'markers',
              // hovertext:[host.hostid],
              hovertemplate:
            "<b>%{customdata.short_name}...</b><br><br>" +
            "<b>ID: </b> %{customdata.id}<br>" +
            "<b>IP: </b> %{customdata.ip}<br><br>" +
            "<b>Alineacion:  </b> <span  style='background: #fff;font-family: Arial; font-size: 14px;color:"+colorSG+"'>%{customdata.alineacion}</span><br>" +
            "<extra></extra>",
            customdata: [{
                    nivel:2,
                    name: host.host,
                    alineacion:host.Alineacion,
                    id:host.hostid,
                    ip:host.ip,
                    short_name: host.host.slice(0, 20)
                  }
                  ],
              // customdata: [[host.Alineacion,host.hostid,host.ip,host.host.slice(0, 20)]],
                opacity: 0.8,
                hoverlabel: { bgcolor: "#181818",bordercolor:colorSG,namelength:20,font:{color:"#FFF"} },
              marker: {size:8,color:[colorSG],sizeref: 4000, sizemode: "area" },
              name: '',
              buffer: 512,
          }])
        }else{
          console.log(host)
        }
    }
    )
}

function objeto_relaciones(devices_data){
  devices_data.relations.map((host, index, array)=>
      {
        if (index === 1) {
          setUbicacion({latitud:host.init_lat,longitud:host.init_lon,groupid:ubicacion.groupid,dispId:ubicacion.dispId,templateId:ubicacion.templateId})
          console.log('Recorrido completo');
        }
        if(host.length!==0 && host.init_lat.replace(",", ".")>=-90 && host.init_lat.replace(",", ".")<=90 && host.end_lat.replace(",", ".")>=-90 && host.end_lat.replace(",", ".")<=90){
          
          const hostidC = devices_data.hosts.find(obj => obj.hostid === host.hostidC)
          const hostidP = devices_data.hosts.find(obj => obj.hostid === host.hostidP)
          // if(host.length!==0 && host.latitude.replace(",", ".")>=-90 && host.latitude.replace(",", ".")<=90 ){
            console.log("setLatitu3")
          setLatitudes(latitudes=>[...latitudes,{
              type: 'scattermapbox',
              lat: [host.init_lat, host.end_lat],
              lon: [host.init_lon, host.end_lon],
              text: [hostidP.Host,hostidC.Host],
              mode: 'markers+lines',
              hovertext:[hostidP.Host,hostidC.Host],
              line: {width: 1,color: '#4fb7f3'},
              opacity: 0.8,
              marker: {size:[14,8],color:['#ffffff','#1fee08']},
              name: '',
              hovertemplate:
            "<b>%{customdata.short_name}...</b><br><br>",
            
            hoverlabel: { bgcolor: "#181818",bordercolor:"#1fee08",namelength:20,font:{color:"#FFF"} },
              customdata: [
                {
                  nivel:1,
                  name:hostidP.Host,
                  ip:hostidP.ip,
                  id:hostidP.hostid,
                  short_name:hostidP.Host.slice(0, 30),
                  alineacion:0
                },
                {
                  nivel:2,
                  ip:hostidC.ip,
                  name:hostidC.Host,
                  id:hostidC.hostid,
                  short_name:hostidC.Host.slice(0, 30),
                  alineacion:0
                }],
                buffer: 512,
              
          }])
          /****************************************************************** */
          // setLatitudes(latitudes=>[...latitudes,host.latitude.replace(",", ".")])
          // setLongitudes(longitudes=>[...longitudes,host.longitude.replace(",", ".")])
          // setLocations(locations=>[...locations,host.Host])
        }else{
          console.log(host)
        }
    }
    )
}
function objeto_antenas(devices_data){
  devices_data.hosts.map((host, index, array)=>
      {
        if (index === 1) {
          setUbicacion({latitud:host.latitude,longitud:host.longitude,groupid:ubicacion.groupid,dispId:ubicacion.dispId,templateId:ubicacion.templateId})
          console.log('Recorrido completo');
        }
        if(host.length!==0 && host.latitude.replace(",", ".")>=-90 && host.latitude.replace(",", ".")<=90 ){
          
          
          setLatitudes(latitudes=>[...latitudes,{
              type: 'scattermapbox',
              lat: [host.latitude],
              lon: [host.longitude],
              text: [host.Host],
              mode: 'markers',
              hovertext:[host.Host],
              marker: {size:[14],color:['#ffffff'],symbol:'marker'},
              name: '',
              hovertemplate:
            "<b>%{customdata.short_name}...</b><br><br>",
            
            hoverlabel: { bgcolor: "#181818",bordercolor:"#1fee08",namelength:20,font:{color:"#FFF"} },
              customdata: [
                {
                  nivel:1,
                  name:host.Host,
                  ip:host.ip,
                  id:host.hostid,
                  short_name:host.Host.slice(0, 30),
                  alineacion:0
                }
                ],
                buffer: 512,
              
          }])
          /****************************************************************** */
          // setLatitudes(latitudes=>[...latitudes,host.latitude.replace(",", ".")])
          // setLongitudes(longitudes=>[...longitudes,host.longitude.replace(",", ".")])
          // setLocations(locations=>[...locations,host.Host])
        }else{
          console.log(host)
        }
    }
    )
}
// console.log(latitudes)
// console.log(longitudes)
  return (
   
    <div className='main' style={{height:'100%',width:'100%',position: 'absolute'}}>
      <NavBar/>
      <SideBar/>
      <Container>
        { 
          <>
            <RightQuadrant  search_devices={search_devices} search_problems={search_problems} token={token} ubicacion={ubicacion} latitudes={latitudes}  dataHosts={devices} setUbicacion={setUbicacion} />
            <LeftQuadrant zoom={zoom} setZoom={setZoom} token ={token} setLatitudes={setLatitudes} setLongitudes={setLongitudes} setLocations={setLocations}
            latitudes={latitudes} longitudes={longitudes} locations={locations}
            ubicacion={ubicacion} dataHosts={devices} setUbicacion={setUbicacion} dataProblems={dataProblems} setDataProblems={setDataProblems}/>
          </>
        }
      </Container>
    </div>
    
  );
}

export default App;
