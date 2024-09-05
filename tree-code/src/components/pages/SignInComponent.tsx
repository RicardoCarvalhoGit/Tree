import styles from './SignInComponent.module.css'

import { FaUsers, FaPhone, FaMapLocationDot, FaLock  } from "react-icons/fa6";
import { IoDocument, IoMail } from "react-icons/io5";



function SignIn () {
    return (
        <div className={styles.container}>
                <div className={`${styles.content} ${styles.first_content}`}>
                <div className={styles.first_column}>
                    <h2 className={`${styles.title} ${styles.title_primary}`}>Seja bem-vindo a Tree!</h2>
                    <p className={styles.description}>Caso você deseje criar uma conta pessoal</p>
                    <p className={styles.description}>por favor clique no botão abaixo</p>
                    <button className={`${styles.btn} ${styles.btn_primary}`}>Sou pessoa física</button>
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
                        <button type='submit' className={`${styles.btn} ${styles.btn_secondary}`}>Cadastre-se</button>
                    </form>
                </div>
            </div>
            <div className={`${styles.content} ${styles.second_content}`}>
                <div className={styles.first_column}>
                    <h2 className={styles.title}>Seja bem-vindo!</h2>
                    <p className={styles.description}>Caso você deseje criar uma conta empresarial</p>
                    <p className={styles.description}>por favor clique no botão abaixo</p>
                    <button className={`${styles.btn} ${styles.btn_primary}`}>Sou pessoa jurídica</button>
                </div>
                <div className={styles.second_column}>
                    <h2 className={styles.title}>Crie sua conta pessoa física</h2>
                    <form className={styles.form}>
                        <input type='text' placeholder='Nome' required></input>
                        <input type='number' placeholder='CPF' required></input>
                        <input type='email' placeholder='E-mail' required></input>
                        <input type='tel' placeholder='Contato' required></input>
                        <input type='password' placeholder='Sua senha' required></input>
                        <input type='confirmPassword' placeholder='Confirme sua senha' required></input>
                        <a href='#'>Esqueçeu sua senha? Clique aqui</a>
                        <button type='submit' className={`${styles.btn} ${styles.btn_secondary}`}>Cadastre-se</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn