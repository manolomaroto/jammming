import React, {useState} from 'react';
import './App.css';
import PlayList from './components/PlayList/PlayList';
import SearchBar from './components/SearchBar/SearchBar';
import TrackList from './components/TrackList/TrackList';
import { fetchSongs, saveList } from './services/accessapi';
import 'materialize-css/dist/css/materialize.min.css';

/* const tracks = [
  {name: 'Espiritu', artist: 'Bumbu', album: 'Espiritu', id: '0', uri: "spotify:album:2up3OPMp9Tb4dAKM2erWXQ" },
  {name: 'Aves', artist: 'Descanso', album: 'Matinales', id: '1', uri: "spotify:album:2up3OPMp9Tb4dAKM2erWXQ" },
  {name: 'Kancion', artist: 'Ayer', album: 'Desde', id: '2', uri: "spotify:album:2up3OPMp9Tb4dAKM2erWXQ" },
]; */

function App() {

  const [tracksSelected, setTracksSelected] = useState([]);
  const [listName, setListName] = useState('Mi lista');
  const [tracks, setTracks] = useState([]);


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
    // Añadir el método para enviar el nombre de la lista y luego las canciones
    setTracksSelected([]);
  }

  const getData = async (e) => {
    const data = await fetchSongs(e);
    const results = data.tracks.items.map(item => {
      return {name: item.name, artist: item.artists[0].name, album: item.album.name, id: item.id, uri: item.uri}
    });
    setTracks(results);
  }

  const handleInputChange = (e) => {
    getData(e);
  }

 

  return (
    <div className="App container">
      <h1>Jammming</h1>
      <div className='row'>
        <div className='col s6'>
          <h2>Buscador</h2>
          <SearchBar handleSearchTerm={handleInputChange} />
          <TrackList pistas={tracks} handleTracksSelected={handleTracksSelected}/>
        </div>
        <div className='col s6'>
          <PlayList handleListName={handleListName} listName={listName} playlist={tracksSelected} handleRemoveTrack={removeTrack} handleListArray={handleListArray}/>
        </div>
      </div>
    </div>
  );
}

export default App;
