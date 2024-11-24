import React, { useState } from "react";
import axios from "axios";

const SolicitationList = () => {
  const [solicitations, setSolicitations] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGetRequests = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.get("http://localhost:3001/api/requests");
      setSolicitations(response.data);
    } catch (err) {
      setError("Erro ao buscar solicitações");
      console.error("Erro ao buscar solicitações:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleGetRequests} disabled={loading}>
        {loading ? "Carregando..." : "Buscar Solicitações"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {solicitations.map((solicitation, index) => (
          <li key={index}>
            <strong>Razão Social:</strong> {solicitation.razao_social} <br />
            <strong>CNPJ:</strong> {solicitation.cnpj} <br />
            <strong>Setor:</strong> {solicitation.setor} <br />
            <strong>Motivação:</strong> {solicitation.particas_sustentaveis}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SolicitationList;
