

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

            <hr className="my-5" />

            <div className="reviews-section">
                <h3>Recensioni</h3>
                {movie.reviews && movie.reviews.length > 0 ? (
                    <div className="list-group">
                        {movie.reviews.map((review) => (
                            <div key={review.id} className="list-group-item">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">{review.name}</h5>
                                    <small className="text-warning">Voto: {review.vote}/5</small>
                                </div>
                                <p className="mb-1">{review.text}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-muted">Nessuna recensione per questo film.</p>
                )}
            </div>
        </div>

    )
}