import React from 'react';
import modalStyles from './SucessModal.module.css';
import Check from '../../../../assets/images/Check.png'

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={modalStyles.modalOverlay}>
      <div className={modalStyles.modalContent}>
        <img src={Check} alt="check" className={modalStyles.check} />
        <h2>Login bem-sucedido!</h2>
        <button onClick={onClose} className={modalStyles.closeButton}>
          Continuar
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
