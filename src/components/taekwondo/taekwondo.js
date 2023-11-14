import "./style.css"
import taekwondo from "./taekwondo.jpg"


function Taekwondo() {
  return (
    <div className="taekwondoContainer">
      <img className="taekwondo" src={taekwondo} />

      <div className="horariosContainer">

        <h3>Taekwondo </h3>
        <p> <b>Segundas e Quartas </b><br />das 19:00pm ás 20:00pm</p>
       
        <p><a href="#">Unidade Ribeirão Pires</a></p>
        
        
        

      </div>

    </div>
  )
}
export default Taekwondo