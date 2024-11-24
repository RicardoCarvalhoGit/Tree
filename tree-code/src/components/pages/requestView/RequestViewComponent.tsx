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
  const [requests, setRequests] = useState<Request[]>([]); // Estado para armazenar as solicitações
  const [loading, setLoading] = useState<boolean>(false); // Estado de carregamento
  const [error, setError] = useState<string>(""); // Estado para erro

  // Função para buscar solicitações
  const fetchRequests = async () => {
    setLoading(true); // Inicia o carregamento
    setError(""); // Reseta o erro antes de tentar carregar

    try {
      const response = await axios.get("http://localhost:3001/api/requests"); // Endereço da API no backend
      setRequests(response.data); // Atualiza o estado com as solicitações
    } catch (err) {
      setError("Erro ao buscar solicitações"); // Caso ocorra erro, atualiza o estado de erro
    } finally {
      setLoading(false); // Finaliza o carregamento, independentemente do sucesso ou erro
    }
  };

  // Função fictícia para lidar com o clique no botão "Ver Detalhes"
  const handleRequestClick = (id: number) => {
    console.log(`Ver detalhes da solicitação com ID: ${id}`);
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
    </div>
  );
};

export default RequestViewComponent;
