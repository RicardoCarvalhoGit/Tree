import React, { useState } from 'react';
import styles from './CertificateRequestForm.module.css';

const CertificateRequestForm: React.FC = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        cnpj: '',
        address: '',
        sector: '',
        contactName: '',
        contactEmail: '',
        contactPhone: '',
        motivation: '',
        practices: {
            recycling: false,
            waterConservation: false,
            renewableEnergy: false,
        },
        additionalPractices: '',
        documents: null,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            practices: {
                ...prevData.practices,
                [name]: checked,
            },
        }));
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Dados do formulário:", formData);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <h2 className={styles.title}>Solicitação de Certificação Ecológica</h2>

            <section>
                <h3 className={styles.sectionTitle}>Informações da Empresa</h3>
                <input type="text" name="companyName" placeholder="Nome da Empresa" onChange={handleInputChange} className={styles.inputField} required />
                <input type="text" name="cnpj" placeholder="CNPJ" onChange={handleInputChange} className={styles.inputField} required />
                <input type="text" name="address" placeholder="Endereço" onChange={handleInputChange} className={styles.inputField} required />
                <input type="text" name="sector" placeholder="Setor de Atuação" onChange={handleInputChange} className={styles.inputField} />
            </section>

            <section>
                <h3 className={styles.sectionTitle}>Contato</h3>
                <input type="text" name="contactName" placeholder="Nome do Responsável" onChange={handleInputChange} className={styles.inputField} required />
                <input type="email" name="contactEmail" placeholder="E-mail" onChange={handleInputChange} className={styles.inputField} required />
                <input type="tel" name="contactPhone" placeholder="Telefone" onChange={handleInputChange} className={styles.inputField} required />
            </section>

            <section>
                <h3 className={styles.sectionTitle}>Práticas Sustentáveis</h3>
                <textarea name="motivation" placeholder="Motivo da Solicitação" onChange={handleInputChange} className={styles.textAreaField} required />
                <div className={styles.checkboxGroup}>
                    <label className={styles.checkboxLabel}>
                        <input type="checkbox" name="recycling" onChange={handleCheckboxChange} /> Reciclagem de materiais
                    </label>
                    <label className={styles.checkboxLabel}>
                        <input type="checkbox" name="waterConservation" onChange={handleCheckboxChange} /> Economia de água
                    </label>
                    <label className={styles.checkboxLabel}>
                        <input type="checkbox" name="renewableEnergy" onChange={handleCheckboxChange} /> Energia renovável
                    </label>
                </div>
                <textarea name="additionalPractices" placeholder="Práticas Adicionais" onChange={handleInputChange} className={styles.textAreaField} />
            </section>

            <section>
                <h3 className={styles.sectionTitle}>Certificados e Conformidades Anteriores</h3>
                <input type="file" onChange={handleFileUpload} multiple className={styles.fileUpload} />
            </section>

            <button type="submit" className={styles.submitButton}>Enviar Solicitação</button>
        </form>
    );
};

export default CertificateRequestForm;
