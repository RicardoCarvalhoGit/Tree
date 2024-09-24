import { SetStateAction, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './SignUpComponent.module.css';

import { FaUsers, FaPhone, FaMapLocationDot, FaLock, FaUserTie } from "react-icons/fa6";
import { IoDocument, IoMail } from "react-icons/io5";

function SignUp () {
    const navigate = useNavigate();
    const [signUpType, setSignUpType] = useState(''); 
    const [formData, setFormData] = useState({
        nome_emp: '',
        CNPJ_emp: '',
        email_emp: '',
        contato_emp: '',
        endereco_emp: '',
        senha_emp: '',
        
        nome: '',
        cpf: '',
        email: '',
        telefone: '',
        senha: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSignUpType = (type: SetStateAction<string>) => {
        setSignUpType(type);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            if (signUpType === 'cnpj') {
                console.log('Dados enviados:', formData)
                await axios.post('http://localhost:3001/empresa', {
                    nome_emp: formData.nome_emp,
                    CNPJ_emp: formData.CNPJ_emp,
                    email_emp: formData.email_emp,
                    contato_emp: formData.contato_emp,
                    endereco_emp: formData.endereco_emp,
                    senha_emp: formData.senha_emp
                });
                console.log('Tipo de cadastro:', signUpType);
                console.log('Dados do formulario:', formData);
                alert('Empresa cadastrada com sucesso!');
                navigate('/signIn');
            } else if (signUpType === 'cpf') {
                console.log('Dados enviados:', formData);
                await axios.post('http://localhost:3001/cliente', {
                    nome: formData.nome,
                    cpf: formData.cpf,
                    email: formData.email,
                    telefone: formData.telefone,
                    senha: formData.senha
                });
                console.log('Tipo de cadastro:', signUpType);
                console.log('Dados do formulario:', formData);
                alert('Cliente cadastrado com sucesso!');
                navigate('/signIn');
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Erro no Axios:', error.response?.data || error.message);
                alert(`Erro ao cadastrar: ${error.response?.data?.message || error.message}`);
            } else {
                console.error('Erro desconhecido:', error);
                alert('Erro desconhecido ao cadastrar.');
            }
        }
    };

    return (
            <div className={`${styles.container} ${signUpType === 'cpf' ? styles.cpf_sign_up_js : signUpType === 'cnpj' ? styles.cnpj_sign_up_js : ''}`}>
                    <div className={`${styles.content} ${styles.first_content}`}>
                    <div className={styles.first_column}>
                        <h2 className={`${styles.title} ${styles.title_primary}`}>Seja bem-vindo a Tree!</h2>
                        <p className={styles.description}>Caso você deseje criar uma conta pessoal</p>
                        <p className={styles.description}>por favor clique no botão abaixo</p>
                        <button onClick={() => handleSignUpType('cpf')} className={`${styles.btn} ${styles.btn_primary}`}>Sou pessoa física</button>
                    </div>
                    <div className={styles.second_column}>
                        <h2 className={`${styles.title} ${styles.title_secondary}`}>Crie sua conta empresarial</h2>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <label className={styles.label_input} htmlFor='nome_emp'>
                                <FaUsers className={styles.icon_modify}/>
                                <input 
                                    id='nome_emp' 
                                    type='text' 
                                    placeholder='Nome da empresa'
                                    value={formData.nome_emp}
                                    onChange={handleInputChange}
                                    required>
                                </input>
                            </label>
                            <label className={styles.label_input} htmlFor='CNPJ_emp'>
                                <IoDocument className={styles.icon_modify}/>
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
                                <IoMail className={styles.icon_modify}/>
                                <input
                                    id='email_emp' 
                                    type='email' 
                                    placeholder='E-mail'
                                    value={formData.email_emp}
                                    onChange={handleInputChange} 
                                    required>
                                </input>
                            </label>
                            <label className={styles.label_input} htmlFor='contato_emp'>
                                <FaPhone className={styles.icon_modify}/>
                                <input 
                                    id='contato_emp' 
                                    type='tel' 
                                    placeholder='Contato'
                                    value={formData.contato_emp}
                                    onChange={handleInputChange} 
                                    required>
                                </input>
                            </label>
                            <label className={styles.label_input} htmlFor='endereco_emp'>
                                <FaMapLocationDot className={styles.icon_modify}/>
                                <input 
                                    id='endereco_emp' 
                                    type='text' 
                                    placeholder='Endereço'
                                    value={formData.endereco_emp}
                                    onChange={handleInputChange}
                                    required>
                                </input>
                            </label>
                            <label className={styles.label_input} htmlFor='senha_emp'>
                                <FaLock className={styles.icon_modify}/>
                                <input 
                                    id='senha_emp' 
                                    type='password' 
                                    placeholder='Sua senha'
                                    value={formData.senha_emp}
                                    onChange={handleInputChange} 
                                    required>
                                    </input>
                            </label>
                            <label className={styles.label_input} htmlFor='confirmar_senha'>
                                <FaLock className={styles.icon_modify}/>
                                <input 
                                    id='confirmar_senha' 
                                    type='password' 
                                    placeholder='Confirme sua senha' 
                                    required>
                                </input>
                            </label>
                            <a href='/signIn' className={styles.forgotten_password}>Já tem cadastro? Clique aqui para fazer LogIn</a>
                            <button type='submit' className={`${styles.btn} ${styles.btn_secondary}`}>Cadastre-se</button>
                        </form>
                    </div>
            </div>
            <div className={`${styles.content} ${styles.second_content}`}>
                    <div className={styles.first_column}>
                        <h2 className={`${styles.title} ${styles.title_primary}`}>Seja bem-vindo!</h2>
                        <p className={styles.description}>Caso você deseje criar uma conta empresarial</p>
                        <p className={styles.description}>por favor clique no botão abaixo</p>
                        <button onClick={() => handleSignUpType('cnpj')} className={`${styles.btn} ${styles.btn_primary}`}>Sou pessoa jurídica</button>
                    </div>
                    <div className={styles.second_column}>
                        <h2 className={`${styles.title} ${styles.title_secondary}`}>Crie sua conta pessoa física</h2>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <label className={styles.label_input} htmlFor='nome'>
                                <FaUserTie className={styles.icon_modify}/>
                                <input 
                                    id='nome' 
                                    type='text' 
                                    placeholder='Seu nome'
                                    value={formData.nome}
                                    onChange={handleInputChange}
                                    required>
                                </input>
                            </label>
                            <label className={styles.label_input} htmlFor='cpf'>
                                <IoDocument className={styles.icon_modify}/>
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
                                <IoMail className={styles.icon_modify}/>
                                <input 
                                    id='email' 
                                    type='email' 
                                    placeholder='E-mail'
                                    value={formData.email}
                                    onChange={handleInputChange} 
                                    required>
                                </input>
                            </label>
                            <label className={styles.label_input} htmlFor='telefone'>
                                <FaPhone className={styles.icon_modify}/>
                                <input 
                                    id='telefone' 
                                    type='tel' 
                                    placeholder='Contato'
                                    value={formData.telefone}
                                    onChange={handleInputChange}
                                    required>
                                </input>
                            </label>    
                            <label className={styles.label_input} htmlFor='senha'>
                                <FaLock className={styles.icon_modify}/>
                                <input 
                                    id='senha' 
                                    type='password' 
                                    placeholder='Sua senha'
                                    value={formData.senha}
                                    onChange={handleInputChange}
                                    required>
                                </input>
                            </label>
                            <label className={styles.label_input} htmlFor='confirm_senha'>
                                <FaLock className={styles.icon_modify}/>
                                <input 
                                    id='confirm_senha' 
                                    type='password' 
                                    placeholder='Confirme sua senha' 
                                    required>
                                </input>
                            </label>
                            <a href='/signIn' className={styles.forgotten_password}>Já tem cadastro? Clique aqui para fazer LogIn</a>
                            <button type='submit' className={`${styles.btn} ${styles.btn_secondary}`}>Cadastre-se</button>
                        </form>
                    </div>
            </div>
            </div>
    )
}

export default SignUp