export default function SingleReview({ movie, backendUrl }) {

    return (
        <div className="container py-5">
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