import './styles/NavBar.css'
const NavBar =()=>{
    return(
        <nav className="NavBar">
            <div className="logo">
                <img src="SeguriTech-logo-blanco.png" alt="Logo"/>
            </div>
            <div className='spacing'>

            </div>
            <div className='Title'>
                <h1 className='textTitle'>CASSIA</h1>
            </div>
        {/* <ul className="menu">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Acerca de</a></li>
            <li className="dropdown">
                <a href="#">Servicios</a>
                <ul className="dropdown-content">
                <li><a href="#">Servicio 1</a></li>
                <li><a href="#">Servicio 2</a></li>
                <li><a href="#">Servicio 3</a></li>
                </ul>
            </li>
            <li><a href="#">Contacto</a></li>
        </ul> */}
        </nav>
    )
}

export default NavBar