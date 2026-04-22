import { Link } from "react-router-dom";

export default function MoviesComponent({ movies, backendUrl, backendUrlMovies }) {
    return (
        <>
            <div className="container py-5">
                <div className="row g-4 ">
                    {movies.map(movie => (
                        <div className="col-12 col-md-4 col-lg-3 d-flex justify-content-center" key={movie.id}>
                            <div className="card h-100" style={{ width: '18rem' }}>
                                <img
                                    src={`${backendUrl}/static/${movie?.image}`}
                                    className="card-img-top"
                                    alt={movie?.title}
                                    style={{ height: '250px', objectFit: 'cover' }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{movie?.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{movie?.genre}</h6>
                                    <p className="card-text">
                                        {movie?.abstract}
                                    </p>
                                    <Link to={`/movies/${movie.id}`} className="btn btn-primary mt-auto">
                                        Dettagli
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}