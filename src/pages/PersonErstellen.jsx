import React, { useState } from 'react';

function PersonErstellen() {
    const [name, setName] = useState('');
    const [vorname, setVorname] = useState('');
    const [firma, setFirma] = useState('');
    const [abteilung, setAbteilung] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const neuePerson = { name, vorname, firma, abteilung };

        try {
            const response = await fetch('https://wiwa.uni-trier.de/personenapi/createperson', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(neuePerson),
            });

            if (response.ok) {
                alert('Person erfolgreich gespeichert!');
                setName('');
                setVorname('');
                setFirma('');
                setAbteilung('');
            } else {
                alert('Fehler beim Speichern der Person.');
            }
        } catch (error) {
            alert('Netzwerkfehler: ' + error.message);
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Neue Person erfassen</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        id="name"
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="vorname" className="form-label">Vorname</label>
                    <input
                        id="vorname"
                        type="text"
                        className="form-control"
                        value={vorname}
                        onChange={e => setVorname(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="firma" className="form-label">Firma</label>
                    <input
                        id="firma"
                        type="text"
                        className="form-control"
                        value={firma}
                        onChange={e => setFirma(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="abteilung" className="form-label">Abteilung</label>
                    <input
                        id="abteilung"
                        type="text"
                        className="form-control"
                        value={abteilung}
                        onChange={e => setAbteilung(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Speichern
                </button>
            </form>
        </div>
    );
}

export default PersonErstellen;
