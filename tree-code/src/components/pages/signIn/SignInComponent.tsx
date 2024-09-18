import { SetStateAction, useState } from 'react';
import styles from './SignInComponent.module.css';

import { FaLock } from "react-icons/fa6";
import { IoDocument, IoMail } from "react-icons/io5";

function SignIn () { 
    
    const [signInType, setSignInType] = useState('');

    const handleSignInType = (type: SetStateAction<string>) => {
        setSignInType(type);
    }

    return (
            <div className={`${styles.container} ${signInType === 'cpf' ? styles.cpf_sign_in_js : signInType === 'cnpj' ? styles.cnpj_sign_in_js : ''}`}>
                    <div className={`${styles.content} ${styles.first_content}`}>
                    <div className={styles.first_column}>
                        <h2 className={`${styles.title} ${styles.title_primary}`}>Bem-vindo de volta ao Tree!</h2>
                        <p className={styles.description}>Caso você deseje logar com uma conta pessoal</p>
                        <p className={styles.description}>por favor clique no botão abaixo</p>
                        <button onClick={() => handleSignInType('cpf')} className={`${styles.btn} ${styles.btn_primary}`}>Sou pessoa física</button>
                    </div>
                    <div className={styles.second_column}>
                        <h2 className={`${styles.title} ${styles.title_secondary}`}>Faça seu LogIn empresarial</h2>
                        <form className={styles.form}>
                            <label className={styles.label_input} htmlFor='cnpj'>
                                <IoDocument className={styles.icon_modify}/>
                                <input id='cnpj' type='number' placeholder='CNPJ' required></input>
                            </label>
                            <label className={styles.label_input} htmlFor='email'>
                                <IoMail className={styles.icon_modify}/>
                                <input id='email' type='email' placeholder='E-mail' required></input>
                            </label>
                            <label className={styles.label_input} htmlFor='password'>
                                <FaLock className={styles.icon_modify}/>
                                <input id='password' type='password' placeholder='Sua senha' required></input>
                            </label>
                            <a href='#' className={styles.forgotten_password}>Não tem cadastro? Clique aqui para se cadastrar</a>
                            <button type='submit' className={`${styles.btn} ${styles.btn_secondary}`}>LogIn</button>
                        </form>
                    </div>
            </div>
            <div className={`${styles.content} ${styles.second_content}`}>
                    <div className={styles.first_column}>
                        <h2 className={`${styles.title} ${styles.title_primary}`}>Bem-vindo de volta ao Tree!</h2>
                        <p className={styles.description}>Caso você deseje logar com uma conta empresarial</p>
                        <p className={styles.description}>por favor clique no botão abaixo</p>
                        <button onClick={() => handleSignInType('cnpj')} className={`${styles.btn} ${styles.btn_primary}`}>Sou pessoa jurídica</button>
                    </div>
                    <div className={styles.second_column}>
                        <h2 className={`${styles.title} ${styles.title_secondary}`}>Faca o seu LogIn</h2>
                        <form className={styles.form}>
                            <label className={styles.label_input} htmlFor='cpf'>
                                <IoDocument className={styles.icon_modify}/>
                                <input id='cpf' type='number' placeholder='CNPJ' required></input>
                            </label>
                            <label className={styles.label_input} htmlFor='email'>
                                <IoMail className={styles.icon_modify}/>
                                <input id='email' type='email' placeholder='E-mail' required></input>
                            </label>
                            <label className={styles.label_input} htmlFor='password'>
                                <FaLock className={styles.icon_modify}/>
                                <input id='password' type='password' placeholder='Sua senha' required></input>
                            </label>
                            <a href='#' className={styles.forgotten_password}>Não tem cadastro? Clique aqui para se cadastrar</a>
                            <button type='submit' className={`${styles.btn} ${styles.btn_secondary}`}>LogIn</button>
                        </form>
                    </div>
            </div>
            </div>
    )
}

export default SignIn