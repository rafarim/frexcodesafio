import React, { useState, useEffect } from 'react';
import './Listagem.css';

function Listagem() {
  const [produtos, setProdutos] = useState([]);
  const [carrinho, setCarrinho] = useState(JSON.parse(window.localStorage.getItem('carrinho')));

  useEffect(() => {fetch('https://www.fruityvice.com/api/fruit/all')
    .then(res => res.json())
    .then(res => setProdutos(res))
  },[]);

  function adicionarCarrinho(val){
    if(!carrinho){
      setCarrinho([{'id':val, 'qt':1}]);
      window.localStorage.setItem('carrinho', JSON.stringify(carrinho))
      return;
    }

    const copiaCarrinho = [...carrinho];

    copiaCarrinho.push({'id':val, 'qt':1});

    window.localStorage.setItem('carrinho', JSON.stringify(copiaCarrinho));
    setCarrinho(copiaCarrinho);
  }

  return (
    <div className='prod-pesquisa'>
      <div className='prod-cards'>
        {
          produtos.map(produto => 
          <div key={produto.id}>
            <p>{produto.name}</p>
            <h5>Nutrição(a cada 100g):</h5>
            <h6>Calorias: {produto.nutritions.calories}</h6>
            <h6>Carboidrato: {produto.nutritions.carbohydrates}</h6>
            <h6>Proteína: {produto.nutritions.protein}</h6>
            <h6>Lípidios: {produto.nutritions.fat}</h6>
            <h6>Açúcares: {produto.nutritions.sugar}</h6>
            <label>
              {carrinho && carrinho.find((prod) => prod.id === produto.id) ? <button>No carrinho</button> : <button onClick={() => adicionarCarrinho(produto.id)}>Adicionar ao carrinho</button>}
            </label>
          </div>)
        }
      </div>
    </div>
  );
}

export default Listagem;