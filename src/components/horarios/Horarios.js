import "./style.css"

function Horario() {
  return (
    <div className="containerHora" id='horarios'>
     
      <div className="container-horarios">
      <h2>Musculação</h2>
      <br/>
      <br/>
      <span className='valores'>R$:80,00</span>
      </div>

      <div className="container-horarios">

        <h2>Taekwondo</h2>
        <br/>
        <br/>
        <span className='valores'>R$:50,00</span>
      
      </div>

      
        <div className="container-horarios">
        <h2>Musculação + modalidade</h2>
        <br/>
        <span className='valores'>R$:110,00</span>
        <br />
        </div>

      <div className="container-horarios">
      <h2>Musculação + Nutricionista</h2>
      <br/>
      
      <span className='valores'>R$:119,00</span>
      <br />
      </div>

      <div className="container-horarios">
      <h2>Combo casal 1 [Musculaçao]</h2>
      <br/>
  
      <span className='valores'>R$:130,00</span>
      <br />
      </div>

      <div className="container-horarios">
      <h2>Combo casal 2 [Musculaçao + 1 modalidade]</h2>
  
      <br/>
      <span className='valores'>R$:119,00</span>
      <br />
      </div>

      <div className="container-horarios">
      <h2>Plano familiar [Musculaçao]  </h2>
      <p>por integrante </p>
      <br/>
      <br/>
      <span className='valores'>R$:65,00</span>
      <br />
      </div>

      <div className="container-horarios">
        <br/>
      <h2>Plano melhor idade </h2>
      <br/>
      <br/>
      <span className='valores'>R$:59,90</span>
     
      </div>

      


    </div>
  )
}

export default Horario