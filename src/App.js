import { useState } from 'react';
import './App.css';

function App() {

const [endereco, setEndereco] = useState('')
const [resposta, setResposta] = useState('')

function buscaEndereco(evento){
  const cep = evento.target.value
  setEndereco({
    cep
  })
    if(cep && cep.length === 8){
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(resposta => resposta.json())
      .then(dados =>{
        setEndereco({
          cep:dados.cep,
          rua: dados.logradouro,
          bairro: dados.bairro,
          cidade: dados.localidade,
          estado: dados.uf
        })
      })
    } 
  }
    function mostraEndereco(endereco){
     
      return ( <ul>
        <li>CEP: {endereco.cep}</li>
        <li>Rua: {endereco.rua}</li>
        <li>Bairro: {endereco.bairro}</li>
        <li>Cidade: {endereco.cidade}</li>
        <li>Estado: {endereco.estado}</li>
        
      </ul> )
      
    }
  

  return (
    <div className="App">
      <header className="App-header">
      <h1>Busca CEP</h1>
      <input placeholder='digite o seu cep' type="text" onChange={buscaEndereco} />
      <button onClick={()=> setResposta(mostraEndereco(endereco))}>buscar</button>
     {resposta}
     
      
      </header>
    </div>
  );
}

export default App;
