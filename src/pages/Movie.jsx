import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleMovie from "../components/SingleMovie";
import SingleReview from "../components/SingleReview";
import ReviewForm from "../components/ReviewForm";

const backendUrl = import.meta.env.VITE_APP_BACKEND_URL;
const backendMoviesUrl = import.meta.env.VITE_APP_BACKEND_URL_MOVIES;

export default function Movie() {
    const [movie, setMovie] = useState(null);
    const { id } = useParams();


    /* create a function to rerender without refresh */

    const fetchMovie = () => {

                fetch(`${backendMoviesUrl}/${id}`)
            .then(res => res.json())
            .then(data => {
                setMovie(Array.isArray(data) ? data[0] : data);
            })
            .catch(err => console.error("Errore fetch:", err));

    }



    useEffect(() => {
        fetchMovie()

    }, [id]);
    if (!movie) {
        return <div className="container py-5">Caricamento in corso...</div>;
    }

    return (
<>
<SingleMovie movie={movie} backendUrl={backendUrl} />
<hr className="my-5" />
<ReviewForm movie={movie} movieId={id} fetchMovie={fetchMovie}/>
<hr className="my-5"/>
<SingleReview movie={movie} backenUrl={backendUrl}/>
</>
    );
}