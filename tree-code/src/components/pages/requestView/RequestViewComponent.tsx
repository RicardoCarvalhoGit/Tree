import React, { useState } from "react";
import axios from "axios"; // Para fazer a requisição HTTP
import styles from './RequestViewComponent.module.css'; // Importa o CSS

interface Request {
  id: number;
  razao_social: string;
  cnpj: string;
  endereco: string;
  setor: string;
  contato_nome: string;
  contato_email: string;
  contato_telefone: string;
  particas_sustentaveis: string;
  status: string;
}

const RequestViewComponent: React.FC = () => {
  const [requests, setRequests] = useState<Request[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedRequest, setSelectedRequest] = useState<Request | null>(null);

  // Função para buscar solicitações
  const fetchRequests = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get("http://localhost:3001/api/requests");
      setRequests(response.data);
    } catch (err) {
      setError("Erro ao buscar solicitações");
    } finally {
      setLoading(false);
    }
  };

  // Função para lidar com o clique no botão "Ver Detalhes"
  const handleRequestClick = (id: number) => {
    const request = requests.find((request) => request.id === id);
    if (request) {
      setSelectedRequest(request);
      setModalOpen(true);
    }
  };

  // Função para atualizar o status da solicitação
  const updateRequestStatus = async (status: string) => {
    if (selectedRequest) {
      try {
        await axios.put(`http://localhost:3001/api/requests/${selectedRequest.id}`, {
          status,
        });
        setRequests((prevRequests) =>
          prevRequests.map((request) =>
            request.id === selectedRequest.id
              ? { ...request, status }
              : request
          )
        );
        setSelectedRequest((prev) =>
          prev ? { ...prev, status } : null
        );
      } catch (err) {
        setError("Erro ao atualizar status");
      }
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedRequest(null);
  };

  return (
    <div className={styles.container}>
      <h1>Solicitações Pendentes</h1>

      {/* Botão para buscar as solicitações */}
      <button onClick={fetchRequests} disabled={loading} className={styles.fetchButton}>
        {loading ? "Carregando..." : "Buscar Solicitações"}
      </button>

      {/* Exibe o status de carregamento */}
      {loading && <p className={styles.loading}>Carregando solicitações...</p>}

      {/* Exibe o erro caso aconteça */}
      {error && <p className={styles.error}>{error}</p>}

      {/* Exibe as solicitações caso não haja erro e o carregamento tenha terminado */}
      {!loading && !error && (
        <table>
          <thead>
            <tr>
              <th>Razão Social</th>
              <th>CNPJ</th>
              <th>Setor</th>
              <th>Status</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request.id}>
                <td>{request.razao_social}</td>
                <td>{request.cnpj}</td>
                <td>{request.setor}</td>
                <td>{request.status}</td>
                <td>
                  <button onClick={() => handleRequestClick(request.id)}>
                    Ver Detalhes
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Modal de detalhes da solicitação */}
      {modalOpen && selectedRequest && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Detalhes da Solicitação</h2>
            <p><strong>Razão Social:</strong> {selectedRequest.razao_social}</p>
            <p><strong>CNPJ:</strong> {selectedRequest.cnpj}</p>
            <p><strong>Endereço:</strong> {selectedRequest.endereco}</p>
            <p><strong>Setor:</strong> {selectedRequest.setor}</p>
            <p><strong>Contato:</strong> {selectedRequest.contato_nome}</p>
            <p><strong>Email:</strong> {selectedRequest.contato_email}</p>
            <p><strong>Telefone:</strong> {selectedRequest.contato_telefone}</p>
            <p><strong>Práticas Sustentáveis:</strong> {selectedRequest.particas_sustentaveis}</p>
            <p><strong>Status:</strong> {selectedRequest.status}</p>

            <div className={styles.modalButtons}>
              {selectedRequest.status === "pendente" ? (
                <>
                  <button
                    onClick={() => updateRequestStatus("aprovado")}
                    className={styles.approveButton}
                  >
                    Aprovar Solicitação
                  </button>
                  <button
                    onClick={() => updateRequestStatus("recusado")}
                    className={styles.rejectButton}
                  >
                    Recusar Solicitação
                  </button>
                </>
              ) : (
                <button className={styles.emailButton}>
                  Enviar E-mail
                </button>
              )}
              <button onClick={closeModal} className={styles.closeModalButton}>
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default RequestViewComponent;
