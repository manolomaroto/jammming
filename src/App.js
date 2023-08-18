import React, {useState} from 'react';
import './App.css';
import PlayList from './components/PlayList/PlayList';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/Searchresults/SearchResults'
import TrackList from './components/TrackList/TrackList';

const tracks = [
  {name: 'Espiritu', artist: 'Bumbu', album: 'Espiritu', id: '0' },
  {name: 'Aves', artist: 'Descanso', album: 'Matinales', id: '1' },
  {name: 'Kancion', artist: 'Ayer', album: 'Desde', id: '2' },
];

function App() {

  const [tracksSelected, setTracksSelected] = useState([]);

  const handleTracksSelected = (e => {
    if(tracksSelected.some(item => item.id == e.target.id)){
      return;
    }
    const cancionSeleccionada = tracks.filter(item => item.id == e.target.id)
    setTracksSelected(canciones => [...canciones, cancionSeleccionada[0]]);
    console.log(tracksSelected)
  })

  return (
    <div className="App">
      <h1>Jammming</h1>
      <div>
        <SearchBar />
      </div>
      <PlayList playlist={tracksSelected}/>
      
      <SearchResults />
      <TrackList pistas={tracks} handleTracksSelected={handleTracksSelected}/>
    </div>
  );
}

export default App;
