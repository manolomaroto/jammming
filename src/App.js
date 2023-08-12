import logo from './logo.svg';
import './App.css';
import PlayList from './components/PlayList/PlayList';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/Searchresults/SearchResults';
import Track from './components/Track/Track';
import TrackList from './components/TrackList/TrackList';

function App() {
  return (
    <div className="App">
      <h1>Ey</h1>
      <PlayList />
      <SearchBar />
      <SearchResults />
      <Track />
      <TrackList />
    </div>
  );
}

export default App;
