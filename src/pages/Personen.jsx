import React, { useEffect, useState } from "react";

const Personen = () => {
    const [personen, setPersonen] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://wiwa.uni-trier.de/personenapi/personen")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Netzwerkantwort war nicht ok");
                }
                return response.json();
            })
            .then((data) => {
                setPersonen(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Daten werden geladen...</p>;
    }

    if (error) {
        return <p className="text-danger">Fehler: {error}</p>;
    }

    return (
        <div className="container">
            <h1>Personen</h1>
            <table className="table table-striped table-hover mt-3">
                <thead className="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Vorname</th>
                    <th>Name</th>
                    <th>Firma</th>
                    <th>Abteilung</th>
                    <th>Aktionen</th>
                </tr>
                </thead>
                <tbody>
                {personen.map((person, index) => (
                    <tr key={index}>
                        <td>{person.id}</td>
                        <td>{person.name}</td>
                        <td>{person.vorname}</td>
                        <td>{person.firma}</td>
                        <td>{person.abteilung}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Personen;
