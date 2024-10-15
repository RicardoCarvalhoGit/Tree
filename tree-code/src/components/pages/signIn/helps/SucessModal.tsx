import React from 'react';
import modalStyles from './SucessModal.module.css';
import check from '../../../../assets/check.png'

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={modalStyles.modalOverlay}>
      <div className={modalStyles.modalContent}>
        <img src={check} alt="check" className={modalStyles.check} />
        <h2>Login bem-sucedido!</h2>
        <button onClick={onClose} className={modalStyles.closeButton}>
          Fechar
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
