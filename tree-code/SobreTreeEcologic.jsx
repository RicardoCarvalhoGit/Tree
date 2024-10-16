import React from 'react';

const TreEcologic = () => {
    const styles = {
        body: {
            fontFamily: 'Arial, sans-serif',
            lineHeight: '1.6',
            color: '#333',
            backgroundColor: '#3B7861',
            margin: 0,
            padding: 0,
        },
        container: {
            width: '80%',
            margin: 'auto',
            overflow: 'hidden',
            padding: '20px',
        },
        header: {
            background: '#333',
            color: '#fff',
            paddingTop: '10px',
            minHeight: '70px',
            borderBottom: '#ccc 1px solid',
            textAlign: 'center',
        },
        h1: {
            margin: 0,
            fontSize: '2em',
        },
        content: {
            background: '#fff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        },
        h2: {
            color: '#333',
        },
        p: {
            marginBottom: '10px',
        },
        ul: {
            paddingLeft: '20px',
        },
        li: {
            marginBottom: '10px',
        }
    };

    return (
        <div style={styles.body}>
            <header style={styles.header}>
                <h1 style={styles.h1}>TreEcologic</h1>
            </header>
            <div style={styles.container}>
                <div style={styles.content}>
                    <h2 style={styles.h2}>Sobre o TreEcologic</h2>
                    <p style={styles.p}>
                        Bem-vindo ao TreEcologic – sua plataforma de confiança para reconhecer e apoiar empresas que fazem a diferença no meio ambiente! 
                        Em um mundo onde a sustentabilidade é mais importante do que nunca, o TreEcologic se dedica a identificar, certificar e ranquear 
                        empresas que estão na vanguarda da proteção ambiental e da responsabilidade social.
                    </p>

                    <h2 style={styles.h2}>Quem Somos</h2>
                    <p style={styles.p}>
                        O TreEcologic foi criado com o propósito de destacar e promover práticas empresariais que contribuem positivamente para o meio ambiente. 
                        Nossa equipe é composta por especialistas em sustentabilidade, analistas de impacto que trabalham juntos para avaliar o desempenho ambiental 
                        das empresas e garantir que aquelas que realmente se destacam recebam o reconhecimento que merecem.
                    </p>

                    <h2 style={styles.h2}>O Que Fazemos</h2>
                    <ul style={styles.ul}>
                        <li style={styles.li}>
                            <strong>Certificação Ambiental:</strong> Nosso processo de certificação avalia rigorosamente as práticas ecológicas das empresas. 
                            Através de uma metodologia transparente e baseada em critérios ambientais sólidos, concedemos selos de certificação a empresas que 
                            demonstram um compromisso genuíno com a sustentabilidade.
                        </li>
                        <li style={styles.li}>
                            <strong>Ranqueamento de Empresas Sustentáveis:</strong> Oferecemos uma visão clara e objetiva sobre quais empresas estão liderando o 
                            caminho em termos de inovação verde e responsabilidade ambiental. Nossos rankings são elaborados a partir de uma análise abrangente 
                            de práticas sustentáveis, gestão de recursos e impacto social.
                        </li>
                        <li style={styles.li}>
                            <strong>Recursos e Informações:</strong> Fornecemos uma ampla gama de recursos educativos e informações sobre práticas sustentáveis, 
                            tendências emergentes e estratégias eficazes para reduzir o impacto ambiental. Nossa missão é empoderar empresas e consumidores com 
                            o conhecimento necessário para tomar decisões conscientes.
                        </li>
                    </ul>

                    <h2 style={styles.h2}>Nossa Missão</h2>
                    <p style={styles.p}>
                        No TreEcologic, acreditamos que o futuro do nosso planeta depende das escolhas que fazemos hoje. Estamos comprometidos em promover 
                        uma economia mais verde e responsável, apoiando empresas que não apenas atendem aos padrões ambientais, mas que também inspiram outros 
                        a seguir o mesmo caminho. Ao escolher empresas certificadas e ranqueadas pelo TreEcologic, você está fazendo uma escolha consciente 
                        para um futuro mais sustentável.
                    </p>

                    <h2 style={styles.h2}>Conecte-se Conosco</h2>
                    <p style={styles.p}>
                        Se você é uma empresa que busca se destacar por suas práticas ambientais ou um consumidor que deseja fazer a diferença, o TreEcologic 
                        é seu parceiro ideal. Navegue pelo nosso site para descobrir como você pode se beneficiar da nossa certificação e rankings, e como pode 
                        contribuir para um mundo mais verde.
                    </p>

                    <p style={styles.p}>
                        Obrigado por visitar o TreEcologic. Juntos, podemos transformar o futuro em um lugar mais sustentável!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TreEcologic;
