
import './App.css';

 
import Contato from './components/contatos/Contatos';
import Conteudo from './components/conteudo/conteudo';
import Footer from './components/footer/footer';
import Horario from './components/horarios/Horarios';
import Localizacao from './components/localizacao/localizacao';
import MenuTopo from './components/menu/Menu';
import Taekwondo from './components/taekwondo/taekwondo';


function App() {
  return (
    <div className="App">
      
 

      
     <MenuTopo/>
     <Conteudo/>

     <Taekwondo/>
     
     <Horario/>
     <Contato/>
     <Localizacao/>
     <Footer/>


    
    

  
    </div>
  );
}

export default App;
