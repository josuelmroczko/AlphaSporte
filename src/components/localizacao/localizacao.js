import "./style.css"

function Localizacao() {
  const iframeStyle = {
    
    border: 0,
    width: "100%",
    height: "250px"
  };

  return (
    <div className="maps" id="localizacao" >
      <div className="map">
        <p className="textomap">Unidade Ribeirão Pires </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233834.60490139172!2d-46.48420442949713!3d-23.68791014917549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce73cb1cbcda9b%3A0xa633939c10e71072!2sAlpha%20Sports%20Ouro%20Fino!5e0!3m2!1spt-BR!2sbr!4v1682618526456!5m2!1spt-BR!2sbr"
          allowFullScreen   
          loading="lazy"
          referrerPolicy ="no-referrer-when-downgrade"
          style={iframeStyle}
        />
    
      </div>
      
      <div className="map">
        <p className="textomap">Unidade Mauá</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14615.182363295646!2d-46.460571430224604!3d-23.683266899999996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6be5bb4cadd7%3A0x2714982b44fb9a2a!2sReal%20Auto%20Pe%C3%A7as!5e0!3m2!1spt-BR!2sbr!4v1682711763801!5m2!1spt-BR!2sbr" width="100%" height="250" style={{border: 'none'}} allowFullScreen ="" loading="lazy" referrerPolicy ="no-referrer-when-downgrade"></iframe>

      </div>
    </div>
  );
}
export default Localizacao