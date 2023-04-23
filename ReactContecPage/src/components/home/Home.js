import banner from "../../assets/banner.png";
import "./home.css";

function Home() {
  return (
    <div className="Home">
      <div className="banner">
        <div className="banner-int">
          <div className="banner-img">
            <img
              src={banner}
              alt="O chefe mostrando um gráfico em decadência para 2 funcionários"
            />
          </div>
          <div className="home-content">
            <h2>Contabil Contabilidade</h2>
            <p>
              A Contabil Contabilidade tem orgulho de estar em operação há mais
              de 50 anos. Fundada pelo Sr. Contabil Gonzaga, nosso escritório é
              uma referência em serviços contábeis confiáveis e de alta
              qualidade.
            </p>
            <p>
              <span />
              Nós oferecemos uma ampla gama de serviços contábeis, incluindo
              contabilidade geral, planejamento tributário, folha de pagamento,
              auditoria interna e externa, e muito mais. Nossa equipe altamente
              qualificada e experiente está sempre pronta para ajudar nossos
              clientes a tomar decisões financeiras informadas e alcançar seus
              objetivos.
            </p>
            <p>
              <span />
              Na Contabil Contabilidade, levamos a sério nosso compromisso com a
              excelência e a ética. Trabalhamos de perto com nossos clientes
              para entender suas necessidades e fornecer soluções personalizadas
              para atender às suas necessidades específicas.
            </p>
            <p>
              <span />
              Se você está procurando um escritório contábil confiável e de
              confiança, entre em contato conosco hoje mesmo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
