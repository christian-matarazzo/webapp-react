import { useEffect, useState } from "react"
import MoviesComponent from "../components/MoviesComponent"
export default function Movie() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(backendMoviesUrl)
            .then(response => response.json())
            .then(data => setMovies(data))
    }, [])




const backendMoviesUrl = import.meta.env.VITE_APP_BACKEND_URL_MOVIES
const backendUrl = import.meta.env.VITE_APP_BACKEND_URL
    return (
        <main>
            <MoviesComponent movies = {movies} backendUrl = {backendUrl} backendMoviesUrl = {backendMoviesUrl}/>
        </main>
    )

}