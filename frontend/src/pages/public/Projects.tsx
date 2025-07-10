import { Link } from 'react-router-dom';
import '../../assets/css/Over.css';
import { Helmet } from 'react-helmet';
import '../../assets/css/OvervView.css';
import { LoadingSpinner } from '../../components/ui/LoadingSpinner';
import Navbar from '../../components/ui/Navbar';
import { useEffect, useState } from 'react';
import { Server, Music3, Construction, FolderOpen } from 'lucide-react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer'; 

export default function Projects() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Helmet>
        <title>Projetos - M&D Desenvolvedor Web Fullstack</title>
      </Helmet>

      <main className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center px-4 main-container">
        <Header />
        <Navbar />

        <section className="grid gap-6 max-w-6xl w-full container-father-cards-page">

          {/* Projeto Caixa */}
          <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-2 flex items-center justify-center gap-2">
              <Server size={20} /> Caixa - Sistema de Inventário
            </h2>
            <p className="text-sm text-gray-700 text-justify text-project-page">
              O sistema de gestão de estoque foi desenvolvido para atender às necessidades específicas de controle e monitoramento de inventário em dois datacenters da Caixa Econômica Federal, localizados no Distrito Federal, sob a responsabilidade do Departamento de Instalações. Este sistema visa otimizar a operação de inventário em ambientes corporativos de grande porte, com um alto nível de segurança e controle rigoroso de dados, garantindo a integridade e a disponibilidade das informações de estoque.
            </p>
            <Link className="bg-button-color flex items-center justify-center gap-3 text-btn-project-page" to="/project1">
              <FolderOpen size={18} /> Ver Projeto
            </Link>
          </div>

          {/* Projeto BandsCloud */}
          <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-2 flex items-center justify-center gap-2">
              <Music3 size={20} /> BandsCloud - Conexão Musical
            </h2>
            <p className="text-sm text-gray-700 text-justify text-project-page">
              O BandsCloud é uma plataforma web inovadora criada para fortalecer a conexão entre artistas independentes, estabelecimentos culturais e fãs de música. Pensada para fomentar a cena musical independente, a aplicação oferece um espaço onde músicos podem divulgar seus trabalhos, encontrar oportunidades para se apresentarem ao vivo e estabelecer parcerias com bares, casas de shows e outros locais que buscam talentos autênticos.
            </p>
            <Link className="bg-button-color flex items-center justify-center gap-3 text-btn-project-page" to="/project2">
              <FolderOpen size={18} /> Ver Projeto
            </Link>
          </div>

          {/* Projeto em Construção */}
          <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-2 flex items-center justify-center gap-2">
              <Construction size={20} /> Projeto em Construção
            </h2>
            <div className="mt-4 bg-yellow-100 text-yellow-800 text-sm font-medium px-4 py-2 rounded-md shadow-inner alert-project-card">
              ⚠️ Aplicação em desenvolvimento. Este projeto ainda está em fase de construção e, em breve, será adicionado à coleção de projetos disponíveis neste portfólio.
            </div>
            <br />
            <Link className="bg-button-color flex items-center justify-center gap-3 text-btn-project-page mt-4" to="/">
              <FolderOpen size={18} /> Ver Projeto
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
