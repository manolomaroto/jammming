import React, {useState} from 'react';
import './App.css';
import PlayList from './components/PlayList/PlayList';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/Searchresults/SearchResults'
import TrackList from './components/TrackList/TrackList';

const tracks = [
  {name: 'Espiritu', artist: 'Bumbu', album: 'Espiritu', id: '0', uri: "spotify:album:2up3OPMp9Tb4dAKM2erWXQ" },
  {name: 'Aves', artist: 'Descanso', album: 'Matinales', id: '1', uri: "spotify:album:2up3OPMp9Tb4dAKM2erWXQ" },
  {name: 'Kancion', artist: 'Ayer', album: 'Desde', id: '2', uri: "spotify:album:2up3OPMp9Tb4dAKM2erWXQ" },
];

function App() {

  const [tracksSelected, setTracksSelected] = useState([]);
  const [listName, setListName] = useState('Mi lista');

  const handleTracksSelected = (e => {
    if(tracksSelected.some(item => item.id == e.target.id)){
      return;
    }
    const cancionSeleccionada = tracks.filter(item => item.id == e.target.id)
    setTracksSelected(canciones => [...canciones, cancionSeleccionada[0]]);
  });

  const removeTrack = (e) => {
    const cancionesFiltradas = tracksSelected.filter( item => item.id !== e.target.id);
    setTracksSelected([...cancionesFiltradas]);
  }

  const handleListName = (e) => {
    setListName(e.target.value);
  }

  const handleListArray = () => {
    const listUri = tracksSelected.map(track => track.uri);
    console.log(listUri)
    setTracksSelected([]);
  }

  return (
    <div className="App">
      <h1>Jammming</h1>
      <div>
        <SearchBar />
      </div>
      <SearchResults />
      <TrackList pistas={tracks} handleTracksSelected={handleTracksSelected}/>
      <PlayList handleListName={handleListName} listName={listName} playlist={tracksSelected} handleRemoveTrack={removeTrack} handleListArray={handleListArray}/>
    </div>
  );
}

export default App;
