import './HomePageComponent.modules.css';
import Contactform from '../../layout/contact/Contactform';
import HomeNavBarComponent from '../../layout/homeNavBar/homeNavBarComponent';

function HomePage() {
    return (
        <div className="Home">
            <HomeNavBarComponent />
            <div className="content">
                <div className="card">
                    <img className='i' src="https://static.wixstatic.com/media/4893c9_75fee6ab617648c8bcad06359d16b195~mv2.jpeg/v1/fit/w_1000%2Ch_1000%2Cal_c%2Cq_80/file.jpeg" alt="Imagem 1" />
                    <p>Transforme sua empresa em um ícone ecológico com nosso sistema inovador!</p>
                </div>
                <div className="card">
                    <img className='i' src="https://th.bing.com/th/id/OIP.kmT55XXHwGxQLbUIQBSXdQHaE8?rs=1&pid=ImgDetMain" alt="Imagem 2" />
                    <p>No mundo de hoje, onde a natureza está gritando por socorro, surge a EcoTree! Um sistema inovador que certifica empresas que realmente se importam com o planeta. Se você acha que sua empresa é a próxima grande em sustentabilidade, é hora de brilhar! Nosso objetivo é simples: classificar as empresas com base em suas ações ecológicas.</p>
                </div>
            </div>

            <div className='content'>
                <div className="card">
                    <img className='i' src="https://th.bing.com/th/id/OIP.RreQxhP_3rsXey511pBZbgHaF7?rs=1&pid=ImgDetMain" alt="Imagem 3" />
                    <p>Se você está fazendo a diferença, vamos te dar o reconhecimento que você merece! Junte-se a nós nessa jornada verde e descubra como sua empresa pode se destacar no ranking das mais ecológicas.</p>
                </div>
                <div className="card">
                    <img className='i' src="https://img.freepik.com/fotos-premium/negocios-sostenibles-o-negocios-verdes-ilustracion-vectorial-practicas-ecologicas_957479-20168.jpg" alt="Imagem 4" />
                    <p>Participe de nossos workshops e eventos para aprender mais sobre práticas sustentáveis e como implementá-las em sua empresa.</p>
                    <p>Conecte-se com outras empresas ecológicas e compartilhe suas experiências e estratégias para um futuro mais verde.</p>
                </div>
            </div>
            <div className="content">
                <div className="card">
                    <img className='i' src="https://www.terradecultivo.com.br/tcsolucoesambientais/wp-content/uploads/2021/07/sustentabilidade01.jpg" alt="Imagem 5" />
                    <p>Ranking de Sustentabilidade:
                        Algoritmo que classifica as empresas com base em critérios de sustentabilidade.
                        Atualização periódica do ranking com base nas novas certificações e auditorias.
                        Relatórios e Análises:
                        Relatórios detalhados sobre o desempenho das empresas certificadas.
                        Análises comparativas entre empresas e setores.</p>
                </div>
                <div className="card">
                    <img className='i' src="https://th.bing.com/th/id/OIP.Kbf-1LNDBMLUw2Ai931P_gHaE8?rs=1&pid=ImgDetMain" alt="Imagem 6" />
                    <p>Benefícios
                        Transparência: Facilita o acesso a informações sobre práticas sustentáveis das empresas.
                        Credibilidade: Aumenta a confiança dos consumidores nas empresas certificadas.
                        Competitividade: Incentiva as empresas a melhorarem suas práticas para subir no ranking.
                        Sustentabilidade: Promove um ambiente de negócios mais sustentável e responsável.</p>
                </div>
            </div>
            <Contactform />
        </div>
    );
};

export default HomePage;