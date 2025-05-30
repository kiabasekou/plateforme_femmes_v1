import { useState } from "react";

function PendingParticipantCard({ participante }) {
  const [showMotif, setShowMotif] = useState(false);
  const [motif, setMotif] = useState("");

  const reject = async () => {
    const res = await fetch(`/api/reject-participant/${participante.id}/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ motif }),
    });
    const data = await res.json();
    if (data.success) {
      alert("Participante rejetée !");
      window.location.reload(); // ou mets à jour localement le statut
    } else {
      alert(data.error || "Erreur lors du rejet.");
    }
  };

  return (
    <div className="border p-4 rounded shadow my-2">
      <h3 className="font-bold">{participante.first_name} {participante.last_name}</h3>
      <p>Email: {participante.email}</p>
      <p>Région: {participante.region}</p>
      <p>Ville: {participante.ville}</p>
      <p>
        <a
          href={participante.document_justificatif}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 underline"
        >
          Voir le justificatif
        </a>
      </p>

      {showMotif ? (
        <div className="mt-3">
          <textarea
            className="w-full border p-2 rounded"
            placeholder="Motif du rejet..."
            value={motif}
            onChange={(e) => setMotif(e.target.value)}
          />
          <button onClick={reject} className="mt-2 bg-red-600 text-white px-4 py-2 rounded">
            Confirmer rejet
          </button>
        </div>
      ) : (
        <button
          onClick={() => setShowMotif(true)}
          className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
        >
          Rejeter
        </button>
      )}
    </div>
  );
}

export default PendingParticipantCard;
