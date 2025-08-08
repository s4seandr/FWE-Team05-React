import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function PersonErstellen() {
    const [name, setName] = useState('');
    const [vorname, setVorname] = useState('');
    const [firma, setFirma] = useState('');
    const [abteilung, setAbteilung] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Der eingetragene Name war: $(vorname) $(name)')
    };

    return (
        <div>
            <h2>Neue Person erfassen</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label><br />
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Vorname:</label><br />
                    <input
                        type="text"
                        value={vorname}
                        onChange={e => setVorname(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Firma:</label><br />
                    <input
                        type="text"
                        value={firma}
                        onChange={e => setFirma(e.target.value)}
                    />
                </div>
                <div>
                    <label>Abteilung:</label><br />
                    <input
                        type="text"
                        value={abteilung}
                        onChange={e => setAbteilung(e.target.value)}
                    />
                </div>
                <button type="submit">Speichern</button>
            </form>
        </div>
    );
}

export default PersonErstellen;