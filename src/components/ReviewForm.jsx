import { useState } from "react"


export default function ReviewForm({movie, movieId, fetchMovie}) {

    const [formData, setFormData] = useState({
        name: "",
        vote: 0,
        text: ""
    })


    const handleInputChange = (e) => {
        const {name, value}= e.target;
        setFormData({
            ...formData, [name]: value
        })
    }



const handleSubmit = (e) => {
    if (!formData.name.trim() || !formData.text.trim() || formData.vote === 0) {
        alert("Per favore, compila tutti i campi e assegna un voto.");
        return;
    }
        e.preventDefault()

        fetch(`${import.meta.env.VITE_APP_BACKEND_URL_MOVIES}/${movieId}/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                console.log("Risposta dal server:", data);
                setFormData({
                    name: "",
                    vote: 0,
                    text: ""
                });
                fetchMovie(); /* function to rerender */
            })
            .catch(err => console.error("Errore:", err));
    };

    return (
        <div className="container">
            <p className="h2 my-5">Scrivi qui la tua recensione...</p>
            <form onSubmit={handleSubmit}>
                <label  className="form-label">Nome</label>
                <input required name="name"value={formData.name} onChange={handleInputChange} type="text" className="form-control" id="name" placeholder="Inserisci il tuo nome..." />
                <label  className="form-label mt-5">Recensione</label>
                <textarea required name="text" value={formData.text} onChange={handleInputChange} type="text" className="form-control" id="text" placeholder="Scrivi la tua recensione..." />
                <label  className="form-label mt-5">Voto: </label>
                <select name="vote" className="Vote-Select mx-3"  id="vote" onChange={handleInputChange} value={formData.vote}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <br />
                <button name="invio" id="invio"class="btn btn-primary mt-5" role="button">Invia</button>
                
            </form>
        </div>
    )
}