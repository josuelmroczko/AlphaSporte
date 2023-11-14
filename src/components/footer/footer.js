import React from 'react';
import './style.css';

function Footer() {
  return (
    <footer>
       
      <div className="atendimento">
        <h4>Centro de atendimento</h4>
        <a className="telefone" href="tel:+1199873-1174">Whatsapp: (11) 98765-4321</a><br/>
        <a className="telefone" href="tel:+111234-5678">Telefone: (11) 48223453</a><br/>
        <a className="telefone" href="https://www.instagram.com/alphasport20/ "target='black'>instagram:alphasport</a><br/>
        <a className="telefone" href="https://www.instagram.com/edson_constantino/"target='black'>instagram:edson_constantino</a><br/><br/>
        
        <strong>Nossos Horários</strong>
        <p className="horarios">Segunda a sexta das 6:00 às 22:00hs</p>
        <p className="horarios">Sábado e domingos das 9:00 às 12:00</p>
      </div>

   
    <p className='copyright'>Copyright ©2023 Todos os direitos reservados</p>
   
    </footer>
  );
}

export default Footer;