import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import SingleMovie from "../components/SingleMovie";
import SingleReview from "../components/SingleReview";
import ReviewForm from "../components/ReviewForm";
import Loader from "../components/Loader";
import { GlobalContext } from "../contexts/GlobalContext";

const backendUrl = import.meta.env.VITE_APP_BACKEND_URL;
const backendMoviesUrl = import.meta.env.VITE_APP_BACKEND_URL_MOVIES;

export default function Movie() {
    const [movie, setMovie] = useState(null);
    const { id } = useParams();
    const { setLoading } = useContext(GlobalContext);


    /* create a function to rerender without refresh */

    const fetchMovie = () => {
        setLoading(true)
        fetch(`${backendMoviesUrl}/${id}`)
            .then(res => res.json())
            .then(data => {
                setMovie(Array.isArray(data) ? data[0] : data);
            })
            .catch(err => console.error("Errore fetch:", err))
            .finally(() => {
                setLoading(false);
            });

    }



    useEffect(() => {
        fetchMovie()

    }, [id]);
   if (!movie) {
        return null
    } 

    return (
        <>
            <SingleMovie movie={movie} backendUrl={backendUrl} />
            <hr className="my-5" />
            <ReviewForm movie={movie} movieId={id} fetchMovie={fetchMovie} />
            <hr className="my-5" />
            <SingleReview movie={movie} backenUrl={backendUrl} />
        </>
    );
}