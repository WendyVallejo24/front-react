import imageRickMorty from './img/rick-morty.png';
import ine from './img/ine.jpg';
import './App.css';
import { useState } from "react";
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character')
    const characterApi = await api.json();
    
    setCharacters(characterApi.results);
  };

  return (
    <html>
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img src={imageRickMorty} alt='Rick & Morty' className='img-home'></img>
            <button onClick={reqApi} className='btn-search'>
              Buscar Personajes
            </button>
            <h4 className='info'>Wendy Belén Vallejo Patraca - S20006733</h4>
            <p>zS20006733@estudiantes.uv.mx</p>
            <img src={ine} alt='INE' className='img-ine'></img>
            <br />
          </>
        )}
        
      </header>
    </div>
    </html>
  );
}

export default App;
