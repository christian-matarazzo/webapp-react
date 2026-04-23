import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="container vh-100 d-flex align-items-center justify-content-center text-center">
            <div className="col-lg-8">
                <div className="mb-4">
                    <i className="bi bi-film display-1 text-primary"></i>
                </div>

                <h1 className="display-4 fw-bold mb-3"><span className="text-danger">Movie</span> App</h1>

                <p className="lead fs-4 text-muted mb-5">
                    Benvenuto nel tuo archivio cinematografico personale.
                    Movie App è il portale dove puoi esplorare una vasta libreria di titoli,
                    scoprire i dettagli tecnici e leggere le recensioni della nostra community.
                    Tutto ciò che serve a un appassionato di cinema, in un unico posto.
                </p>

                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <Link
                        to="/movies"
                        className="button btn btn-primary btn-lg px-5 py-3 fw-bold shadow-sm"
                    >
                        Esplora i Film
                    </Link>
                </div>
            </div>
        </div>
    );
}