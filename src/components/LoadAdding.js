import './styles/LoadAdding.css'

const LoadAdding=()=>{
    return(
        <div className='LoadContent'>
            <div className='compactLoadItems'>
                
                <div className='loadCont iconLoadCont'>
                    {/* <span className='loader'></span> */}
                    <div className="adding">
                        <span></span>
                    </div>
                </div>
                <div className=' loadCont textLoadCont'>
                    <div className='txtAdding'>GUARDANDO...
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

export default LoadAdding