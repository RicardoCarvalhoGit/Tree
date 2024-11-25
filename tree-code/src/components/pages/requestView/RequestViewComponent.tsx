import React, { useState } from "react";
import axios from "axios"; 
import styles from './RequestViewComponent.module.css'; 
import HomeNavBarComponent from "@/components/layout/homeNavBar/homeNavBarComponent";

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
  const [showFileUpload, setShowFileUpload] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };
  
  const sendEmail = async () => {
    if (!selectedRequest) {
      setError("Nenhuma solicitação selecionada.");
      return;
    }
  
    if (!selectedFile) {
      setError("Por favor, selecione um certificado para anexar.");
      return;
    }
  
    const formData = new FormData();
    formData.append("id", selectedRequest.id.toString());
    formData.append("file", selectedFile);
  
    try {
      const response = await axios.post("http://localhost:3001/send-email", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
  
      alert("E-mail enviado com sucesso!");
    } catch (err) {
      console.error("Erro ao enviar e-mail:", err);
      setError("Erro ao enviar o e-mail.");
    }
  };
  
 
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
    <>
    <HomeNavBarComponent />
    <div className={styles.container}>
      <h1>Solicitações Pendentes</h1>

     
      <button onClick={fetchRequests} disabled={loading} className={styles.fetchButton}>
        {loading ? "Carregando..." : "Buscar Solicitações"}
      </button>

     
      {loading && <p className={styles.loading}>Carregando solicitações...</p>}

      {error && <p className={styles.error}>{error}</p>}

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
              ) : null}
              {selectedRequest.status === "aprovado" && (
                <>
                  <button
                    onClick={() => setShowFileUpload(!showFileUpload)}
                    className={styles.emailButton}
                  >
                    Enviar E-mail
                  </button>
                  {showFileUpload && (
                    <div className={styles.fileUploadBox}>
                      <p>Anexe o certificado:</p>
                      <input type="file" onChange={handleFileChange} />
                      <button className={styles.submitEmailButton} onClick={sendEmail}>
                        Confirmar Envio
                      </button>
                    </div>
                  )}
                </>
              )}
              <button onClick={closeModal} className={styles.closeModalButton}>
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default RequestViewComponent;
