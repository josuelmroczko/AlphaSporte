import "./style.css"

import insta from "./instagram.png"
import whats from "./whatsapp.png"
import telefone from "./telefone-velho.png"
function Contato ( ){
    return (
        <div className="contato" id="contato"> 
        <h3>Contatos</h3>   
        <div className="icons">
        <a href="https://www.instagram.com/alphasport20/" target="_blank"><img src={insta}></img></a>
        <a href="https://api.whatsapp.com/send?phone=5511998731174 "target="_blank"><img src={whats}></img></a>
        <a href="tel:+11998731174"> <img src={telefone}></img></a>
        </div>
        </div>
    )
}

export default Contato