import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import Map from './Map/Map';
import './App.css';

function App() {
  const [query, setQuery] = React.useState("858 Coleman Ave");

  return (
    <div className="App">
      <SearchBar {...{query, setQuery}} />
      <Map />
    </div>
  );
};

export default App;
