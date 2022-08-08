import { useState, useEffect } from 'react';
import './Cart.css';

function Cart() {
  const [produtos, setProdutos] = useState();
  const [carrinho, setCarrinho] = useState(JSON.parse(window.localStorage.getItem('carrinho')));
  
  useEffect(() => {fetch('https://www.fruityvice.com/api/fruit/all')
    .then(res => res.json())
    .then(res => setProdutos(res))
  },[]);

  function adicionarQtd(val){
    const copiaCarrinho = [...carrinho];

    const produto = copiaCarrinho.find((prod) => prod.id === val);

    if(!produto){return;}

    produto.qt = produto.qt + 1;

    window.localStorage.setItem('carrinho', JSON.stringify(copiaCarrinho));
    setCarrinho(copiaCarrinho);
  }

  function removerQtd(val){
    let copiaCarrinho = [...carrinho];

    const produto = copiaCarrinho.find((prod) => prod.id === val);

    if(!produto){return;}

    if(produto.qt === 1){
       copiaCarrinho = copiaCarrinho.filter((prod) => prod.id !== val);
    }
    else{
      produto.qt = produto.qt - 1;
    }
    window.localStorage.setItem('carrinho', JSON.stringify(copiaCarrinho));
    setCarrinho(copiaCarrinho);
  }

  function achaProduto(val){
    const copiaProdutos = [...produtos];

    return copiaProdutos.find((prod) => prod.id === val);
  }

  function limpaCarrinho(){
    window.localStorage.removeItem('carrinho');
    setCarrinho();
  }

  return (
    <div className='car-main'>
      <div className='car-cards'>
        {carrinho && 
        <>
          {
            carrinho.map(produto => 
            <div key={produto.id}>
              <h2>{produtos && achaProduto(produto.id).name}</h2>
              <div className='car-button-holder'>
                <h6>qtd: {produto.qt}</h6>
                <button onClick={() => removerQtd(produto.id)}>-</button>
                <button onClick={() => adicionarQtd(produto.id)}>+</button>
              </div>
            </div>)
          }
        </>
        }
      </div>
      {carrinho ?
      <div className='car-button-clear'>
        <button onClick={limpaCarrinho}>Limpa Carrinho</button>
      </div>
      :
      <h2 className='car-empty'>Carrinho Vazio!</h2>}
    </div>
  );
}

export default Cart;