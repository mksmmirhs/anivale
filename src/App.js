import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SearchField from './components/SearchField';
import ImageCard from './components/ImageCard';

function App() {
  const [uiData, setUiData] = useState([]);
  // search fetch function
  const searchHandler = event => {
    event.preventDefault();
    const search = event.target.search.value;
    // split and join based as api need
    const searchText = search.split(' ').join('+');
    const key = process.env.REACT_APP_API_KEY;
    fetch(`https://pixabay.com/api/?key=${key}&q=${searchText}`)
      .then(res => res.json())
      .then(data => setUiData(data.hits));
    event.target.search.value = '';
  };

  return (
    <div className="bg-slate-100 min-h-screen">
      <Header></Header>
      <div className="max-w-[1200px] mx-auto">
        <SearchField searchHandler={searchHandler}></SearchField>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 py-4">
          {uiData.map(imageData => (
            <ImageCard
              key={imageData.id}
              largeImageURL={imageData.largeImageURL}
            ></ImageCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
