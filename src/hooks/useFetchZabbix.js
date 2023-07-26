import { useEffect,useState } from "react"
export function useFetch(body){
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
        console.log("llamado")
        setLoading(true)
      fetch("http://172.18.200.14/zabbix/api_jsonrpc.php",{
      method:'POST',
        headers:{
          'Content-Type':'application/json',
          
        },
        body:JSON.stringify(body)
    })
      .then((response)=>response.json())
      .then((data)=>setData(data))
      .catch((error)=>setError(error))
      .finally((loading)=>setLoading(false))

      // return ()=>abortController.abort();
    },[])

    
//   return {data,loading,error}
return {data,loading,error}
  }

