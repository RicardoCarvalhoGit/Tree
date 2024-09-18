import { SetStateAction, useState } from 'react';
import styles from './SignUpComponent.module.css'

import { FaUsers, FaPhone, FaMapLocationDot, FaLock, FaUserTie } from "react-icons/fa6";
import { IoDocument, IoMail } from "react-icons/io5";

function SignUp () { 
    
    const [signUpType, setSignUpType] = useState('');

    const handleSignUpType = (type: SetStateAction<string>) => {
        setSignUpType(type);
    }

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
                        <form className={styles.form}>
                            <label className={styles.label_input} htmlFor='name'>
                                <FaUsers className={styles.icon_modify}/>
                                <input id='name' type='text' placeholder='Nome da empresa' required></input>
                            </label>
                            <label className={styles.label_input} htmlFor='cnpj'>
                                <IoDocument className={styles.icon_modify}/>
                                <input id='cnpj' type='number' placeholder='CNPJ' required></input>
                            </label>
                            <label className={styles.label_input} htmlFor='email'>
                                <IoMail className={styles.icon_modify}/>
                                <input id='email' type='email' placeholder='E-mail' required></input>
                            </label>
                            <label className={styles.label_input} htmlFor='contact'>
                                <FaPhone className={styles.icon_modify}/>
                                <input id='contact' type='tel' placeholder='Contato' required></input>
                            </label>
                            <label className={styles.label_input} htmlFor='address'>
                                <FaMapLocationDot className={styles.icon_modify}/>
                                <input id='address' type='text' placeholder='Endereço' required></input>
                            </label>
                            <label className={styles.label_input} htmlFor='password'>
                                <FaLock className={styles.icon_modify}/>
                                <input id='password' type='password' placeholder='Sua senha' required></input>
                            </label>
                            <label className={styles.label_input} htmlFor='confirmPassword'>
                                <FaLock className={styles.icon_modify}/>
                                <input id='confirmPassword' type='password' placeholder='Confirme sua senha' required></input>
                            </label>
                            <a href='#' className={styles.forgotten_password}>Já tem cadastro? Clique aqui para fazer LogIn</a>
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
                        <form className={styles.form}>
                            <label className={styles.label_input} htmlFor='name'>
                                <FaUserTie className={styles.icon_modify}/>
                                <input id='name' type='text' placeholder='Seu nome' required></input>
                            </label>
                            <label className={styles.label_input} htmlFor='cpf'>
                                <IoDocument className={styles.icon_modify}/>
                                <input id='cpf' type='number' placeholder='CNPJ' required></input>
                            </label>
                            <label className={styles.label_input} htmlFor='email'>
                                <IoMail className={styles.icon_modify}/>
                                <input id='email' type='email' placeholder='E-mail' required></input>
                            </label>
                            <label className={styles.label_input} htmlFor='contact'>
                                <FaPhone className={styles.icon_modify}/>
                                <input id='contact' type='tel' placeholder='Contato' required></input>
                            </label>    
                            <label className={styles.label_input} htmlFor='password'>
                                <FaLock className={styles.icon_modify}/>
                                <input id='password' type='password' placeholder='Sua senha' required></input>
                            </label>
                            <label className={styles.label_input} htmlFor='confirmPassword'>
                                <FaLock className={styles.icon_modify}/>
                                <input id='confirmPassword' type='password' placeholder='Confirme sua senha' required></input>
                            </label>
                            <a href='#' className={styles.forgotten_password}>Já tem cadastro? Clique aqui para fazer LogIn</a>
                            <button type='submit' className={`${styles.btn} ${styles.btn_secondary}`}>Cadastre-se</button>
                        </form>
                    </div>
            </div>
            </div>
    )
}

export default SignUp