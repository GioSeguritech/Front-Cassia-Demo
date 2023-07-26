function getSuspender(promise){
    let status="pending";
    let response;

    const suspender=promise.then(
        (res)=>{
            status="succes";
            response=res
        },
        (err)=>{
            status="error";
            response=err
        }
    )

    const read=()=>{
        switch(status){
            case "pending":
                throw suspender;
            case "error":
                throw response;
            default:
                return response;
        }
    }
    return {read}
}
export function fetchData(body){
    const promise =fetch("http://172.18.200.14/zabbix/api_jsonrpc.php",{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          
        },
        body:JSON.stringify(body)
      })
        .then((response)=>response.json())
        .then((data)=>data)

        return getSuspender(promise)
}