import './styles/LoadData.css'

const LoadData=()=>{
    return(
        <div className='LoadContent'>
            <div className='compactLoadItems'>
                
                <div className='loadCont iconLoadCont'>
                    {/* <span className='loader'></span> */}
                    <div className="loader">
                        <span></span>
                    </div>
                </div>
                <div className=' loadCont textLoadCont'>
                    <div className='txtLoader'>Obteniendo datos. . .
                    {/* <span className="blink_me" id="rotate">
                        <span>.</span>
                        <span>..</span>
                        <span>...</span>
                    </span>  */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoadData