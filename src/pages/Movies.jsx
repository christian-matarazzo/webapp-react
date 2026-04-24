import { useEffect, useState, useContext} from "react"
import MoviesComponent from "../components/MoviesComponent"
import { GlobalContext } from "../contexts/GlobalContext"
export default function Movie() {
    const backendMoviesUrl = import.meta.env.VITE_APP_BACKEND_URL_MOVIES
    const backendUrl = import.meta.env.VITE_APP_BACKEND_URL

    const [movies, setMovies] = useState([])
    const { setLoading } = useContext(GlobalContext);
    useEffect(() => {
        setLoading(true)
        fetch(backendMoviesUrl)
            .then(response => response.json())
            .then(data => setMovies(data))
            .finally(()=> {setLoading(false)})
    }, [])




    return (
        <main>
            <MoviesComponent movies = {movies} backendUrl = {backendUrl} backendMoviesUrl = {backendMoviesUrl}/>
        </main>
    )

}