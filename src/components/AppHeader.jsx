import { NavLink } from "react-router-dom";
export default function AppHeader() {
    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-light bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand " to="/"><span className="text-danger">Movie </span><span className="text-white">App</span></NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
                        aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarID">
                        <div className="navbar-nav ms-auto ">
                            <NavLink className="nav-link active text-white" aria-current="page" to="/">Home</NavLink>
                            <NavLink className="nav-link text-white" to="/movies">Movies</NavLink>
                            <NavLink className="nav-link text-white" to="/admin">Admin Panel</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )

}