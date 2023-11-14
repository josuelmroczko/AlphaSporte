import "./style.css"

import Logo from "./logo.jpg"
import MenuMobile from "./menuMobile"
import pesos from "./pesos.jpg"

function MenuTopo (){
    return(
     <div className="fundo"> 
 
        <img className="pesos" src={pesos}/>
        

     <div className="menu">
     <img src={Logo} alt="Logo da academia "/>
        <ul className="opcoes_menu">
            <li> <a href="#">  Home</a></li>
            <li> <a href="#localizacao">Unidades </a> </li>
            <li> <a href="#contato"> Contato</a></li>
            <li> <a href="#horarios"> Planos</a></li>
            
        </ul>
        
        <MenuMobile/>
     </div>

    </div>
    )
}

export default MenuTopo