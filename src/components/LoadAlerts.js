import './styles/LoadAlerts.css'

const LoadAlerts=()=>{
    return(
        <div className='LoadContent'>
        <div className='compactLoadItems'>
            
        <div className="loading">
  <svg width="64px" height="48px">
      <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back"></polyline>
    <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front"></polyline>
  </svg>
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

export default LoadAlerts