import './App.css';
import Cabecalho from './components/Cabecalho';
import Produtos from './components/Produtos';

function App() {
  return (
    <div className="App">
      <Cabecalho/>
      <main>
        <Produtos/>
      </main>
    </div>
  );
}

export default App;
