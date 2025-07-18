import './App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'

function App() {
  return (
    <>
      <MovieCard movie={{title: "Sayan", release_data:"2004"}}/>
      <Home/>
    </>
  )
}

export default App
