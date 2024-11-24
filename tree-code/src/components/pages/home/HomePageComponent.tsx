import './HomePageComponent.modules.css';
import Contactform from '../../layout/contact/Contactform';
import HomeNavBarComponent from '../../layout/homeNavBar/homeNavBarComponent';

function HomePage() {
    return (
        <>
            <HomeNavBarComponent />
            <section className="hero">
                <h1>Portal Empresarial de Certificações Sustentáveis</h1>
                <p>
                    Gerencie suas certificações ecológicas, acompanhe métricas e mantenha
                    sua empresa em conformidade com os mais altos padrões de
                    sustentabilidade.
                </p>
            </section>

            <section className="enterprise-section">
                <div className="enterprise-grid">
                    <div className="stats-card">
                        <div className="stats-number">5000+</div>
                        <p>Árvores Preservadas</p>
                    </div>
                    <div className="stats-card">
                        <div className="stats-number">98%</div>
                        <p>Taxa de Aprovação</p>
                    </div>
                    <div className="stats-card">
                        <div className="stats-number">10+</div>
                        <p>Estados Atendidos</p>
                    </div>
                </div>
            </section>

            <section className="features">
                <div className="feature-card">
                    <svg viewBox="0 0 24 24">
                        <path d="M12 2L3 9V20H21V9L12 2Z" fill="currentColor" />
                    </svg>
                    <h3>Gestão de Certificações</h3>
                    <p>
                        Plataforma completa para gerenciar todas as suas certificações
                        ecológicas em um só lugar.
                    </p>
                </div>
                <div className="feature-card">
                    <svg viewBox="0 0 24 24">
                        <path
                            d="M21 11.5C21 16.75 12 21 12 21C12 21 3 16.75 3 11.5C3 6.25 7.02944 2 12 2C16.9706 2 21 6.25 21 11.5Z"
                            fill="currentColor"
                        />
                    </svg>
                    <h3>Relatórios Avançados</h3>
                    <p>
                        Análises detalhadas e insights sobre seu desempenho ambiental e
                        conformidade.
                    </p>
                </div>
                <div className="feature-card">
                    <svg viewBox="0 0 24 24">
                        <path
                            d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                            fill="currentColor"
                        />
                    </svg>
                    <h3>Suporte Especializado</h3>
                    <p>
                        Equipe dedicada para auxiliar em todas as etapas do processo de
                        certificação.
                    </p>
                </div>
            </section>
        </>
    );
}

export default HomePage;