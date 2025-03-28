import estilos from './Encabezado.module.css'
import Logo from "../../img/logo.svg"
import Perfil from "../../img/perfil.svg"
import Vinculo from './Vinculo'

function Encabezado() {

  return (
    <header className={estilos.encabezado}>
        <div className={estilos.contenedor}>
          <Vinculo 
                to='' 
                texto='GoalsApp'>
                <img src={Logo} className={estilos.logo}></img>
          </Vinculo>
        </div>
        <nav className='nav'>
          <Vinculo 
                to=''>
                <img src={Perfil} className={estilos.icono}></img>
          </Vinculo>
        </nav>
    </header>
  )
}

export default Encabezado
