import React, {useState} from 'react';
import './App.css';
import PlayList from './components/PlayList/PlayList';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/Searchresults/SearchResults'
import TrackList from './components/TrackList/TrackList';

const tracks = [
  {name: 'Espiritu', artist: 'Bumbu', album: 'Espiritu', id: '01' },
  {name: 'Aves', artist: 'Descanso', album: 'Matinales', id: '02' },
  {name: 'Kancion', artist: 'Ayer', album: 'Desde', id: '03' },
];

function App() {

  return (
    <div className="App">
      <h1>Jammming</h1>
      <div>
        <SearchBar />
      </div>
      <PlayList playlist={tracks}/>
      
      <SearchResults />
      <TrackList pistas={tracks}/>
    </div>
  );
}

export default App;
