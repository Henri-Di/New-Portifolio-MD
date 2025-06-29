import { Helmet } from 'react-helmet';
import '../../assets/css/Over.css';
import '../../assets/css/OvervView.css';
import { LoadingSpinner } from '../../components/ui/LoadingSpinner';
import Navbar from '../../components/ui/Navbar';
import { useEffect, useState } from 'react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer'; 

export default function ProjectOne() {
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
        <title>Projeto Sistema de Invetário - M&D Desenvolvedor Web Fullstack</title>
      </Helmet>

      <main className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center px-4 main-container">
        <Header />

        {/* Navbar adicionada */}
        <Navbar />

        <section className="grid gap-6 max-w-6xl w-full container-father-cards-page">
          {/* Projeto Caixa */}
          <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-2">Escopo</h2>
            <p className="text-sm text-gray-700 text-justify text-project-page">
              O sistema de gestão de estoque foi desenvolvido para atender às demandas específicas de controle e monitoramento do inventário em dois datacenters da Caixa Econômica Federal, localizados no Distrito Federal. Sob a responsabilidade do Departamento de Instalações, este sistema tem como objetivo principal otimizar a operação de inventário em ambientes corporativos de grande porte.

              Além disso, o sistema garante um alto nível de segurança e um controle rigoroso sobre os dados, assegurando a integridade e a disponibilidade das informações relacionadas ao estoque, essenciais para a gestão eficiente dos recursos dos datacenters. Oferencdo otimização nos processos e tomadas de decisão.
            </p>

          </div>

          <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-2">Frontend</h2>
            <img src="/images/saas.png" className="mx-auto h-16 object-contain img-card-projects" />
            <img src="/images/tailwind.png" className="mx-auto h-16 object-contain img-card-projects" />
            <img src="/images/bootstrap.png" className="mx-auto h-16 object-contain img-card-projects" />
            <img src="/images/javascript.png" className="mx-auto h-16 object-contain img-card-projects" />
          </div>

          <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-2">Backend</h2>
            <img src="/images/php.png" className="mx-auto h-16 object-contain img-card-projects" />
            <img src="/images/laravel.png" className="mx-auto h-16 object-contain img-card-projects" />
            <img src="/images/sql.jpg" className="mx-auto h-16 object-contain img-card-projects" />
            <img src="/images/mysql.png" className="mx-auto h-16 object-contain img-card-projects" />
          </div>

          <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-2">Aplicação Web</h2>
          <video 
            className="mx-auto rounded-lg" 
            width="225" 
            height="305" 
            controls 
            preload="metadata"
            >
            <source src="/video/project-view-1.mp4" type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>
         </div>
        </section>
        
        <Footer />
      </main>
    </>
  );
}
