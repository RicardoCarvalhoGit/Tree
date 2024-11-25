import React, { useState } from "react";
import styles from "./SecretLoginModal.module.css";
import { useNavigate } from 'react-router-dom';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SecretLoginModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const predefinedUsername = "admin";
  const predefinedPassword = "123";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); 

    if (username === predefinedUsername && password === predefinedPassword) {
      onClose()
      navigate('/requestView');
    } else {
      setErrorMessage("Usuário ou senha incorretos.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Login Área de Administrador</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Usuário"
            className={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorMessage && <p className={styles.error}>{errorMessage}</p>}
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.button}>
              Entrar
            </button>
            <button type="button" onClick={onClose} className={styles.closeButton}>
              Fechar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SecretLoginModal;
