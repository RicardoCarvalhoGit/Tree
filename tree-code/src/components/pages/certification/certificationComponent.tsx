import React from 'react';
import styles from './CertificationComponent.module.css';
import DowloadButton from '../../layout/buttons/dowloadButton/DowloadButton';
import HomeNavBarComponent from '@/components/layout/homeNavBar/homeNavBarComponent';

const Certification: React.FC = () => {
  return (
    <div>
      <HomeNavBarComponent />
      <header className={styles.heroSection}>
        <div className={styles.card}>
          <h2>Role para baixo para ver mais sobre nosso certificado.</h2>
    </div>
      </header>

      <section className={styles.certificateSection}>
        <b>
        <h3>
          Ter um certificado da tree-ecologic pode trazer várias vantagens para a sua empresa. Em primeiro lugar, ele
          demonstra o compromisso da empresa com a sustentabilidade e o meio ambiente, o que pode melhorar a sua imagem
          e reputação perante os clientes e parceiros.
        </h3>
        </b>
      </section>

      <section className={styles.vantagens}>
        <h2>Vantagens do Certificado Ambiental</h2>
        <ul>
          <li>
            <h3>• Aumento da confiança dos clientes</h3>
            <p>
              Ao obter um certificado ambiental, a empresa demonstra seu compromisso com a sustentabilidade e o meio
              ambiente, o que pode aumentar a confiança dos clientes em sua marca.
            </p>
          </li>
          <li>
            <h3>• Melhoria da imagem e reputação</h3>
            <p>
              O certificado ambiental pode melhorar a imagem e reputação da empresa perante os clientes e parceiros, o
              que pode atrair mais negócios e oportunidades.
            </p>
          </li>
          <li>
            <h3>• Redução de custos</h3>
            <p>
              A implementação de práticas sustentáveis pode reduzir os custos da empresa, como o consumo de energia e
              água, e o descarte de resíduos.
            </p>
          </li>
          <li>
            <h3>• Aumento da eficiência</h3>
            <p>
              O certificado ambiental pode ajudar a empresa a identificar oportunidades de melhoria e a implementar
              práticas mais eficientes, o que pode aumentar a sua produtividade e competitividade.
            </p>
          </li>
          <li>
            <h3>• Reconhecimento e credibilidade</h3>
            <p>
              O certificado ambiental pode dar à empresa um reconhecimento e credibilidade no mercado, o que pode atrair
              mais investimentos e parcerias.
            </p>
          </li>
          <li>
            <h3>• Desenvolvimento de uma cultura sustentável</h3>
            <p>
              O certificado ambiental pode ajudar a empresa a desenvolver uma cultura sustentável e a promover práticas
              ambientais responsáveis entre seus funcionários e parceiros.
            </p>
          </li>
          <li>
            <h3>• Aumento da satisfação dos funcionários</h3>
            <p>
              Ao trabalhar em uma empresa que se preocupa com o meio ambiente, os funcionários podem se sentir mais
              satisfeitos e engajados com a empresa.
            </p>
          </li>
          <li>
            <h3>• Reconhecimento em rankings e prêmios</h3>
            <p>
              A empresa pode ser reconhecida em rankings e prêmios relacionados à sustentabilidade e ao meio ambiente, o
              que pode aumentar a sua visibilidade e credibilidade.
            </p>
          </li>
          <li>
            <h3>• Aumento da competitividade</h3>
            <p>
              O certificado ambiental pode dar à empresa uma vantagem competitiva em relação às empresas que não possuem
              um compromisso com a sustentabilidade e o meio ambiente.
            </p>
          </li>
          <li>
            <h3>• Desenvolvimento de novas oportunidades</h3>
            <p>
              O certificado ambiental pode ajudar a empresa a desenvolver novas oportunidades de negócios e parcerias
              com empresas que compartilham os mesmos valores e objetivos.
            </p>
          </li>
        </ul>
      </section>

      <DowloadButton />
    </div>
  );
};

export default Certification;
