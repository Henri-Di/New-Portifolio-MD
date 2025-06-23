import { Helmet } from 'react-helmet';
import '../../assets/css/OvervView.css';
import { LoadingSpinner } from '../../components/ui/LoadingSpinner';
import Navbar from '../../components/ui/Navbar';
import { useEffect, useState } from 'react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer'; 

export default function ProjectThree() {
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
            <p className="text-sm text-gray-700 text-justify">
              O BandsCloud é uma aplicação web inovadora desenvolvida com o objetivo de conectar artistas independentes, estabelecimentos e fãs de música em um único espaço digital. A plataforma foi pensada para fortalecer a cena musical independente, oferecendo um ambiente colaborativo e interativo.

              Por meio do BandsCloud, artistas podem divulgar seus trabalhos, promover eventos, encontrar oportunidades de apresentações ao vivo e se conectar diretamente com locais que buscam novos talentos para compor sua programação cultural. Já os fãs de música têm acesso a uma vitrine de novos artistas, podendo conhecer, acompanhar e curtir seus conteúdos favoritos.
            
              A proposta central da aplicação é fomentar o cenário musical independente, aproximando criadores de conteúdo musical dos espaços e do público, utilizando a tecnologia como meio facilitador dessa rede.
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
            <img src="/images/mysql.png" className="mx-auto h-16 object-contain img-card-projects" />
            <img src="/images/postgresql.png" className="mx-auto h-16 object-contain img-card-projects" />
          </div>

          <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-2">Aplicação Web</h2>
  
            <video 
            className="mx-auto rounded-lg" 
            width="225" 
            height="340" 
            controls 
            preload="metadata"
            >
            <source src="/video/project-view-3.mp4" type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>
          </div>
        </section>
        
        <Footer />
      </main>
    </>
  );
}
