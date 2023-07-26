import './styles/InfoStatus.css'

const InfoStatus=({titulo,value,tipo,size})=>{
    return(
        <div className='dataContentColumn'>
            <div className='compactData'>
                
                <label style={{fontSize:size==='min'?'medium':'x-large'}} className={'labelData lbl'+tipo}>{titulo}</label>
                <input className={'InfoData inp'+tipo} value={value} disabled/>
            </div>

        </div>
    )
}

export default InfoStatus