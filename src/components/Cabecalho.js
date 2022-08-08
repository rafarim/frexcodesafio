import './Cabecalho.css';

function Cabecalho(){
    return  (
      <header>
        <nav>
          <a className="cab-logo" href="/">horta<strong>E</strong>frutas</a>
          <ul className="cab-nav-list">
            <li><a href="/">Início</a></li>
            <li><a href="/">Produtos</a></li>
            <li><a href="/">Carrinho</a></li>
          </ul>
        </nav>
      </header>
    );
}

export default Cabecalho;