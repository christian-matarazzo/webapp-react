

export default function SingleMovie({ movie, backendUrl }) {




    return (
        <div className="container py-5">
            <div className="row align-items-md-stretch">
                <div className="col-md-6">
                    <div className="h-100 p-2">
                        <img
                            src={`${backendUrl}/static/${movie.image}`}
                            alt={movie.title}
                            className="img-fluid rounded shadow"
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="h-100 p-5 bg-light border rounded-3">
                        <h2>{movie.title}</h2>
                        <p className="lead">{movie.abstract}</p>
                        <ul className="list-unstyled">
                            <li><strong>Genere:</strong> {movie.genre}</li>
                            <li><strong>Anno:</strong> {movie.release_year}</li>
                            <li><strong>Regia:</strong> {movie.director}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}