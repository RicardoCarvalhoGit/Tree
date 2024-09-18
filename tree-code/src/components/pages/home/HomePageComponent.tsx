import React from 'react';
import './HomePageComponent.modules.css';

const HomePage: React.FC = () => {
    return (
        <div className="Home">
            <header className="Home-header">
                <div className="logo-container">
                    <h3>ECOTREE</h3>
                    <nav className="nav-links">
                        <a href="https://youtu.be/lJBcZHzgD7s?si=ob_xQ2ZCRl-Ro4Fc">Home</a>
                        <a href="https://youtu.be/QNYT9wVwQ8A?si=IoNKFFXeBWViSClQ">Ranking</a>
                        <a href="#about">Sobre</a>
                    </nav>
                    <div className="auth-buttons">
                        <button className="signup-button">Torne-se Eco</button>
                        <button className="login-button">LoginEco</button>
                    </div>
                </div>
            </header>

            <div className="container">
                <div className="header-image">
                    <div className="overlay">
                        <h1 className="">Bem-Vindo A Tree</h1>
                        <button className="cta-button">Saiba Mais</button>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="card">
                    <img className='i' src="https://th.bing.com/th/id/OIP.JXuNDO7QtarHiQCWtCrbKQHaEg?w=280&h=180&c=7&r=0&o=5&pid=1.7" alt="Imagem 1" />
                    <p>Transforme sua empresa em um ícone ecológico com nosso sistema inovador!</p>
                </div>
                <div className="card">
                    <img className='i' src="https://th.bing.com/th/id/OIP.HuAtBtJEIv-zHVXB-FfoKAHaHa?w=150&h=180&c=7&r=0&o=5&pid=1.7" alt="Imagem 2" />
                    <p>No mundo de hoje, onde a natureza está gritando por socorro, surge a EcoTree! Um sistema inovador que certifica empresas que realmente se importam com o planeta. Se você acha que sua empresa é a próxima grande em sustentabilidade, é hora de brilhar! Nosso objetivo é simples: classificar as empresas com base em suas ações ecológicas.</p>
                </div>
            </div>

            <div className='content'>
                <div className="card">
                    <img className='i' src="https://th.bing.com/th/id/OIP.be5aDPIIMcp7dKHWdZwdcQHaHa?w=173&h=180&c=7&r=0&o=5&pid=1.7" alt="Imagem 3" />
                    <p>Se você está fazendo a diferença, vamos te dar o reconhecimento que você merece! Junte-se a nós nessa jornada verde e descubra como sua empresa pode se destacar no ranking das mais ecológicas.</p>
                </div>
                <div className="card">
                    <img className='i' src="https://th.bing.com/th/id/OIP.iL9xnOFwTHrvPWE4GfV0LQHaFj?w=247&h=185&c=7&r=0&o=5&pid=1.7" alt="Imagem 4" />
                    <p>Participe de nossos workshops e eventos para aprender mais sobre práticas sustentáveis e como implementá-las em sua empresa.</p>
                    <p>Conecte-se com outras empresas ecológicas e compartilhe suas experiências e estratégias para um futuro mais verde.</p>
                </div>
            </div>

            <footer className="footer">

                <p>&copy; 2024 - ecotree2024. Todos os direitos reservados.</p>
            </footer>

        </div>
    );
};

export default HomePage;