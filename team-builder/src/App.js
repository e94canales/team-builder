import React from 'react';
import './App.css';
import Nav from '../src/components/Nav'
import CharacterList from '../src/components/CharacterList'



function App() {

  return (
    <div className="App">
        <Nav />
        <div className='contents'>
        <CharacterList/>
        </div>
    </div>
  );
}

export default App;
