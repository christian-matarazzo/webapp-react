import { useState, useEffect } from "react"
export default function Admin() {

    const backendMoviesUrl = import.meta.env.VITE_APP_BACKEND_URL_MOVIES
    const backendUrl = import.meta.env.VITE_APP_BACKEND_URL

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(backendMoviesUrl)
            .then(response => response.json())
            .then(data => setMovies(data) )
            
            
    }, [])


   function delFilm(id){

        if(confirm("Sei sicuro di voler cancellare?")){
            fetch(`${backendMoviesUrl}/${id}`, 
            {
                method:"DELETE"
            }
            )
        .then(res=> {
            if(res.ok){
                setMovies(movies.filter(movie=> movie.id !== id))
            }
        })
        .catch(err=>console.log("Errore: ", err))

        }

    } 


    return (
        <div className="container">
            <div className="movie-list">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Film</th>
                                <th scope="col">Descrizione</th>
                                <th scope="col">Genere</th>
                                <th className="">Comandi</th>
                            </tr>
                        </thead>
                        <tbody>{movies.map(movie=> (

                            <tr className="movie-table" key={movie.id}>
                                <td scope="row">{movie.title}</td>
                                <td>{movie.abstract}</td>
                                <td>{movie.genre}</td>
                                <td><button>Modifica</button></td>
                                <td><button className="btn btn-danger" onClick= {()=> {delFilm(movie.id)}}>Elimina</button></td>
                            </tr> 
                        ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}