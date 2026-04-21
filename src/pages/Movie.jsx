import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleMovie from "../components/SingleMovie";

const backendUrl = import.meta.env.VITE_APP_BACKEND_URL;
const backendMoviesUrl = import.meta.env.VITE_APP_BACKEND_URL_MOVIES;

export default function Movie() {
    const [movie, setMovie] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`${backendMoviesUrl}/${id}`)
            .then(res => res.json())
            .then(data => {
                setMovie(Array.isArray(data) ? data[0] : data);
            })
            .catch(err => console.error("Errore fetch:", err));
    }, [id]);
    if (!movie) {
        return <div className="container py-5">Caricamento in corso...</div>;
    }

    return (
<SingleMovie movie={movie} backendUrl={backendUrl} />
    );
}