
export default function AppHeader() {
    return (
        <header>
                <nav className="navbar navbar-expand-sm navbar-light bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand " href="#"><span className="text-danger">Movie </span><span className="text-white">App</span></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
                            aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarID">
                            <div className="navbar-nav ms-auto ">
                                <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                                <a className="nav-link text-white" href="#">Movies</a>
                            </div>
                        </div>
                    </div>
                </nav>
        </header>
    )

}