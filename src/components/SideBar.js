import './styles/SideBar.css'
const SideBar =()=>{
    return(
        <div className="sidebar">
            <div className="sidebarRow">
                <div className='sidebarCont'>
                <img src="/iconos/help-circle.svg"/>
                    
                </div>
            </div>
            <div className="sidebarRow">
                <div className='sidebarCont'>
                <img src="/iconos/log-out-red.svg"/>
                </div>
            </div>
       <div className='sideLogo'> 
       <img src="logo-spin.png"  className='icon-seguritech' alt="Logo"/>
       </div>
      </div>
    )
}

export default SideBar