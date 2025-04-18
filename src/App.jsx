import './App.css';
import BlueSwords from './blueSwordsFIle/BlueSwords';
import Header from './header/Header';
import MovieCategory from './movie_Category/movieCategory';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowFixedHeadingData from './showFixedHeadingData/FixedHeadingData';

function App() {
  return (
    <BrowserRouter>
      <div className='app-main-div'>
        <Header />
        <ShowFixedHeadingData />
        <BlueSwords />
        <Routes>
          {/* <Route path='*' element={<Header />} /> */}
          {/* <Route path='/movie/:fileName' element={<Header />} /> */}
          <Route path='*' element={<MovieCategory />} />
          <Route path='/:title' element={<MovieCategory />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
