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
  const [userList, setUserList] = useState([]);
  const [userSearch, setUserSearch] = useState('');

  const handleUserList = () => {
    setUserList(list => [...list, userSearch]);
    setUserSearch('');
  }

  const handleInputChange = (e) => {
    setUserSearch(e.target.value);
  }

  return (
    <div className="App">
      <h1>Jammming</h1>
      <div>
        <input 
          type="text"
          value={userSearch}
          onChange={handleInputChange}
          />
        <button onClick={handleUserList}>Buscar</button>
      </div>
      <PlayList />
      <SearchBar />
      <SearchResults />
      <TrackList pistas={tracks}/>
    </div>
  );
}

export default App;
