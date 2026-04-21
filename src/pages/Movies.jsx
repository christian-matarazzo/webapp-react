import { useEffect, useState } from "react"
import MoviesComponent from "../components/MoviesComponent"
export default function Movie() {
    const backendMoviesUrl = import.meta.env.VITE_APP_BACKEND_URL_MOVIES
    const backendUrl = import.meta.env.VITE_APP_BACKEND_URL

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(backendMoviesUrl)
            .then(response => response.json())
            .then(data => setMovies(data))
    }, [])




    return (
        <main>
            <MoviesComponent movies = {movies} backendUrl = {backendUrl} backendMoviesUrl = {backendMoviesUrl}/>
        </main>
    )

}