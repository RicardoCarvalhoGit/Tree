import './Contactform.css';
import InfoEmail from '../../../assets/images/InfoEmail.png';

function ContactForm() {
    return (
        <div className="contact-form-container" style={{ backgroundImage: `url(${InfoEmail})` }}>
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
                    <button className="sendEmailButton" type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;