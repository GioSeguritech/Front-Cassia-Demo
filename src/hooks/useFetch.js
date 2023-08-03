import { useEffect,useState } from "react"
import axios from 'axios';
export function useFetch(url,body,token,method){
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
    
   
    useEffect(() => {
      
      setLoading(true)
      const fetchData = async () => {
        
      console.log('http://172.18.200.14:8000/api/v1/zabbix/db/'+url+"/"+body)
        try {
          const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqdWFuLm1hcmNpYWwiLCJleHAiOjE2OTEwOTAwMjV9.kYp1NQFEmRNk-rtdroTQHD5WfPAqxwgCvz-4kam9qjs'; // Reemplaza con tu token de autenticación
          const response = await fetch('http://172.18.200.14:8000/api/v1/zabbix/'+url+"/"+body, {
            method: method,  
          headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          });
  
          if (response.ok) {
            
            const data1 = await response.json();
            setLoading(false)
            // Manejo de la respuesta
            setData(data1)
            // console.log(data1);
          } else {
            throw new Error('Error en la solicitud');
          }
        } catch (error) {
          // Manejo de errores
          setError(error)
          console.error(error);
        }
      };
  
      fetchData();
    },[]);
    // console.log(data)
//   return {data,loading,error}
return {data,loading,error}


  }

