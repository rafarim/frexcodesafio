import Base from "../components/Base";
import '../components/Inicio.css';

function Inicio(){
  return (
    <Base>
      <div className='ini-frow'>
        <span>A sua melhor escolha para produtos naturais de qualidade!</span>
        <img src='/img/colheita.jpeg' alt="Imagem"/>
      </div>
    </Base>
  );
}

export default Inicio;