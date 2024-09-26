import React from 'react';
import './Contactform.css';
import infoemail from '../../../assets/infoemail.png';

function ContactForm() {
    return (
        <div className="contact-form-container" style={{ backgroundImage: `url(${infoemail})` }}>
            <div className="contact-form">
                <h4>Mande sua dúvida:</h4>
                <form>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div>
                        <label htmlFor="message">Mensagem:</label>
                        <textarea typeof="message" name="message" required />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;