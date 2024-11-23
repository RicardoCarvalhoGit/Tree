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

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {

        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
            const response = await fetch('http://localhost:3001/api/certification-request', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    companyName: formData.companyName,
                    cnpj: formData.cnpj,
                    address: formData.address,
                    sector: formData.sector,
                    contactName: formData.contactName,
                    contactEmail: formData.contactEmail,
                    contactPhone: formData.contactPhone,
                    motivation: formData.motivation,
                }),
            });
    
            if (response.ok) {
                alert('Solicitação enviada com sucesso!');
                setFormData({
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
            } else {
                alert('Erro ao enviar a solicitação.');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Ocorreu um erro ao enviar os dados.');
        }
    };
    

    return (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <h2 className={styles.title}>Solicitação de Certificação Ecológica</h2>

            <section className={styles.companyInformation}>
                <h3>Informações da Empresa</h3>
                <label htmlFor="companyName">
                    Razão Social
                    <input 
                        id='companyName'
                        type="text" 
                        name="companyName" 
                        placeholder="Nome que deseja que seja emitido no certificado" 
                        onChange={handleInputChange}
                        required 
                    />
                </label>
                <label htmlFor="cnpj">
                    Documento de indentificação
                    <input
                        id='cnpj'
                        type="text" 
                        name="cnpj" 
                        placeholder="CNPJ da sua empresa" 
                        onChange={handleInputChange} 
                        required 
                    />
                </label>
                <label htmlFor="address">
                    Endereço
                    <input 
                        id='address'
                        type="text" 
                        name="address" 
                        placeholder="Local no qual reside sua empresa" 
                        onChange={handleInputChange} 
                        required 
                    />
                </label>
                <label htmlFor="sector">
                    Setor
                    <input 
                        id='sector'
                        type="text" 
                        name="sector" 
                        placeholder="Setor de atuação da sua empresa" 
                        onChange={handleInputChange} 
                        required
                    />
                </label>
            </section>

            <section className={styles.contact}>
                <h3>Contato</h3>
                <label htmlFor="contactName">
                    Nome
                    <input
                        id='contactName'
                        type="text"
                        name="contactName"
                        placeholder="Nome do representante legal"
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label htmlFor="contactEmail">
                    E-mail
                    <input
                        id='contactEmail'
                        type="email"
                        name="contactEmail"
                        placeholder="E-mail do representante legal"
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label htmlFor="contactPhone">
                    Telefone
                    <input 
                        id='contactPhone'
                        type="tel" 
                        name="contactPhone" 
                        placeholder="Telefone do representante legal" 
                        onChange={handleInputChange} 
                        required 
                    />
                </label>
            </section>

            <section className={styles.sustentability}>
                <h3>Prática(s) Sustentável(veis)</h3>
                <label htmlFor="motivation">
                    Descreva as práticas sustentáveis da sua empresa e anexe a comprovação das mesmas na próxiam sessão
                    <textarea 
                        id='motivation'
                        name="motivation" 
                        placeholder="Quais práticas a sua empresa fez para receber o certificado" 
                        onChange={handleInputChange} 
                        required
                    />
                </label>
            </section>

            <section className={styles.provesCertifications}>
                <h3>Comprovante(s)</h3>
                    <p>Anexe documentos que comprovem as práticas sustentaveis mencionadas ácima</p>
                    <input
                        type="file"
                        onChange={handleFileUpload}
                        multiple 
                    />
            </section>

            <button type="submit" onClick={handleSubmit} className={styles.submitButton}>Enviar Solicitação</button>
        </form>
    );
};

export default CertificateRequestForm;
