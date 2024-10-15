import { SetStateAction, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './SignInComponent.module.css';
import SuccessModal from './helps/SucessModal';

import { FaLock } from "react-icons/fa6";
import { IoDocument, IoMail } from "react-icons/io5";

function SignIn () { 
    const navigate = useNavigate();
    const [loginType, setLoginType] = useState('');
    const [formData, setFormData] = useState({
        CNPJ_emp: '',
        email_emp: '',
        senha_emp: '',
        cpf: '',
        email: '',
        senha: ''
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleLoginType = (type: SetStateAction<string>) => {
        setLoginType(type);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            if (loginType === 'cnpj') {
                await axios.post('http://localhost:3001/login_empresa', {
                    CNPJ_emp: formData.CNPJ_emp,
                    email_emp: formData.email_emp,
                    senha_emp: formData.senha_emp
                });
                setIsModalOpen(true);
            } else if (loginType === 'cpf') {
                await axios.post('http://localhost:3001/login_cliente', {
                    cpf: formData.cpf,
                    email: formData.email,
                    senha: formData.senha
                });
                setIsModalOpen(true);
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Erro no Axios:', error.response?.data || error.message);
                alert(`Erro ao fazer login: ${error.response?.data?.message || error.message}`);
            } else {
                console.error('Erro desconhecido:', error);
                alert('Erro desconhecido ao fazer login.');
            }
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        navigate('/')
    }

    return (
            <><div className={`${styles.container} ${loginType === 'cpf' ? styles.cpf_sign_in_js : loginType === 'cnpj' ? styles.cnpj_sign_in_js : ''}`}>
            <div className={`${styles.content} ${styles.first_content}`}>
                <div className={styles.first_column}>
                    <h2 className={`${styles.title} ${styles.title_primary}`}>Bem-vindo de volta ao Tree!</h2>
                    <p className={styles.description}>Caso você deseje logar com uma conta pessoal</p>
                    <p className={styles.description}>por favor clique no botão abaixo</p>
                    <button onClick={() => handleLoginType('cpf')} className={`${styles.btn} ${styles.btn_primary}`}>Sou pessoa física</button>
                </div>
                <div className={styles.second_column}>
                    <h2 className={`${styles.title} ${styles.title_secondary}`}>Faça seu login empresarial</h2>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <label className={styles.label_input} htmlFor='CNPJ_emp'>
                            <IoDocument className={styles.icon_modify} />
                            <input
                                id='CNPJ_emp'
                                type='number'
                                placeholder='CNPJ'
                                value={formData.CNPJ_emp}
                                onChange={handleInputChange}
                                required>
                            </input>
                        </label>
                        <label className={styles.label_input} htmlFor='email_emp'>
                            <IoMail className={styles.icon_modify} />
                            <input
                                id='email_emp'
                                type='email'
                                placeholder='E-mail'
                                value={formData.email_emp}
                                onChange={handleInputChange}
                                required>
                            </input>
                        </label>
                        <label className={styles.label_input} htmlFor='senha_emp'>
                            <FaLock className={styles.icon_modify} />
                            <input
                                id='senha_emp'
                                type='password'
                                placeholder='Sua senha'
                                value={formData.senha_emp}
                                required>
                            </input>
                        </label>
                        <a href='signUp' className={styles.forgotten_password}>Não tem cadastro? Clique aqui para se cadastrar</a>
                        <button type='submit' className={`${styles.btn} ${styles.btn_secondary}`}>Login</button>
                    </form>
                </div>
            </div>
            <div className={`${styles.content} ${styles.second_content}`}>
                <div className={styles.first_column}>
                    <h2 className={`${styles.title} ${styles.title_primary}`}>Bem-vindo de volta ao Tree!</h2>
                    <p className={styles.description}>Caso você deseje logar com uma conta empresarial</p>
                    <p className={styles.description}>por favor clique no botão abaixo</p>
                    <button onClick={() => handleLoginType('cnpj')} className={`${styles.btn} ${styles.btn_primary}`}>Sou pessoa jurídica</button>
                </div>
                <div className={styles.second_column}>
                    <h2 className={`${styles.title} ${styles.title_secondary}`}>Faça o seu login</h2>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <label className={styles.label_input} htmlFor='cpf'>
                            <IoDocument className={styles.icon_modify} />
                            <input
                                id='cpf'
                                type='number'
                                placeholder='CPF'
                                value={formData.cpf}
                                onChange={handleInputChange}
                                required>
                            </input>
                        </label>
                        <label className={styles.label_input} htmlFor='email'>
                            <IoMail className={styles.icon_modify} />
                            <input
                                id='email'
                                type='email'
                                placeholder='E-mail'
                                value={formData.email}
                                onChange={handleInputChange}
                                required>
                            </input>
                        </label>
                        <label className={styles.label_input} htmlFor='senha'>
                            <FaLock className={styles.icon_modify} />
                            <input
                                id='senha'
                                type='password'
                                placeholder='Sua senha'
                                value={formData.senha}
                                onChange={handleInputChange}
                                required>
                            </input>
                        </label>
                        <a href='signUp' className={styles.forgotten_password}>Não tem cadastro? Clique aqui para se cadastrar</a>
                        <button type='submit' className={`${styles.btn} ${styles.btn_secondary}`}>Login</button>
                    </form>
                </div>
            </div>
        </div><SuccessModal isOpen={isModalOpen} onClose={handleCloseModal} /></>
    )
}

export default SignIn