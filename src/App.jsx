import './App.css'
import BlueSwords from './blueSwordsFIle/BlueSwords'
import Header from './header/Header'
import MovieCategory from './movie_Category/movieCategory'

function App() {

  return (
    <div className='app-main-div'>
      <Header />
      <BlueSwords />
      <MovieCategory />
    </div>
  )
}

export default App
