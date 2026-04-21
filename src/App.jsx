import { BrowserRouter, Routes, Route, Link,  } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Movie from './pages/Movie'
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
function App() {


  return (
<>
<AppHeader/>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/movies' element={<Movies/>}/>
  <Route path='/movies/:id' element={<Movie/>}/>
</Routes>
</BrowserRouter>
<AppFooter/>
</>
  )
}

export default App
