import { useEffect ,useState} from "react";
const requestData=async(setData)=>{
    const response=await fetch('http://172.18.200.14/zabbix/api_jsonrpc.php',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        
      },
      body:JSON.stringify({
        "jsonrpc": "2.0",
        "method": "hostgroup.get",
        "params": {
            /* "output": [
                "host",
                "name",
                "extend"
            ], */
            /*  "selectGroups": "extend", */
            /* "hostids":[21723,10596], */
            /* "selectInterfaces":"extend", */
           /*  "selectInventory":"extend", */
            /* "selectTags":"extend",
            "selectInventory": [
                "location",
                "location_lat",
                "location_lon"
            ] */
        },
        "auth":"d99a0fb87c9d64767ba70b16b95047af",
        "id":1
    })
    }
    )
    const data=await response.json()
  
    setData(data.result)
    
  }
const useReqLocation=async(initial)=>{
    const [data,setData]=useState(initial)
    // useEffect(()=>{
    //     console.log("api")
    //     requestData(setData)
    //   },[])
      return [data]
}

export default useReqLocation