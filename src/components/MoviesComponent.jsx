import { useState } from "react";
import { Link } from "react-router-dom";


export default function MoviesComponent({ movies, backendUrl, backendUrlMovies }) {

    const [movieId, setMovieId] = useState(null);
    const [toggler, setToggler] = useState(false);
    const selectedMovie = movies.find(movie => movie.id === movieId);

    function movieModal(id) {
        setMovieId(id);
        setToggler(true);
    }

    function closeModal() {
        setToggler(false);
    }

    return (
        <>
            <div className="container py-5">
                <div className="row g-4">
                    {movies.map(movie => (
                        <div className="col-12 col-md-4 col-lg-3 d-flex justify-content-center" key={movie.id}>
                            <div className="card h-100" style={{ width: '18rem' }}>
                                <div className="movie-img-wrapper" onClick={() => movieModal(movie.id)}>
                                    <img
                                        src={`${backendUrl}/static/${movie?.image}`}
                                        className="card-img-top"
                                        alt={movie?.title}
                                        style={{ height: '250px', objectFit: 'cover', display: 'block' }}
                                    />
                                    <div className="movie-img-overlay">
                                        <span className="eye-icon">👁</span>
                                    </div>
                                </div>

                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{movie?.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{movie?.genre}</h6>
                                    <p className="card-text">{movie?.abstract}</p>
                                    <Link to={`/movies/${movie.id}`} className="btn btn-primary mt-auto">
                                        Dettagli
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modale */}
            {selectedMovie && toggler && (
                <>

                    <div className="modal-backdrop-blur" onClick={closeModal} />

                    <div className="modal-center">
                        <div className="modal-card">
                            <button className="modal-close-btn" onClick={closeModal}>✕</button>
                            <img
                                src={`${backendUrl}/static/${selectedMovie.image}`}
                                alt={selectedMovie.title}
                                style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                            />
                            <div className="card-body p-3">
                                <h5 className="card-title">{selectedMovie.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{selectedMovie.genre}</h6>
                                <p className="card-text">{selectedMovie.abstract}</p>
                                <Link
                                    to={`/movies/${selectedMovie.id}`}
                                    className="btn btn-primary w-100 mt-2"
                                    onClick={closeModal}
                                >
                                    Vai ai dettagli
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}