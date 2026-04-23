import { BrowserRouter, Routes, Route, Link, Outlet, } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Movie from './pages/Movie'
import Admin from './pages/Admin'
import DefaultLayout from './layouts/defaultLayout'
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<Movie />} />
          <Route path="admin" element={<Admin/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
