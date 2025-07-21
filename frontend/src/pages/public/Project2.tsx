import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import '../../assets/css/Over.css';
import '../../assets/css/OvervView.css';
import { LoadingSpinner } from '../../components/ui/LoadingSpinner';
import Navbar from '../../components/ui/Navbar';
import { useEffect, useState } from 'react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer'; 

export default function ProjectTwo() {
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
        <title>Projeto BandsCloud - M&D Desenvolvedor Web Fullstack</title>
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
              O BandsCloud é uma plataforma web inovadora criada para fortalecer e conectar o ecossistema da música independente, reunindo artistas, estabelecimentos culturais e fãs em um único ambiente digital integrado. Desenvolvida com foco na colaboração e na interação, a aplicação oferece recursos que possibilitam aos artistas independentes divulgar seus trabalhos, promover eventos, ampliar sua rede de contatos e acessar oportunidades de apresentações ao vivo junto a espaços culturais que buscam novos talentos para enriquecer sua programação.

              Para os estabelecimentos, o BandsCloud funciona como uma ponte eficaz para descobrir e selecionar artistas emergentes alinhados ao perfil de suas iniciativas culturais, facilitando parcerias estratégicas e a curadoria de experiências musicais autênticas. Os fãs, por sua vez, encontram na plataforma uma vitrine diversificada de novos talentos, onde podem explorar, acompanhar e interagir com conteúdos exclusivos, fortalecendo sua conexão com a cena musical local e independente.

              Assim, o BandsCloud vai além de um simples espaço de divulgação, atuando como um facilitador tecnológico que promove o desenvolvimento sustentável da cena musical independente, estimulando a troca, o crescimento coletivo e o acesso democrático à cultura musical.
            </p>

          </div>

          <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-2">Frontend</h2>
            <img src="/images/tailwind.png" className="mx-auto h-16 object-contain img-card-projects" />
            <img src="/images/vite.png" className="mx-auto h-16 object-contain img-card-projects" />
            <img src="/images/atom.png" className="mx-auto h-16 object-contain img-card-projects" />
            <img src="/images/typescript.png" className="mx-auto h-16 object-contain img-card-projects" />
            <img src="/images/javascript.png" className="mx-auto h-16 object-contain img-card-projects" />
          </div>

          <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-2">Backend</h2>
            <img src="/images/php.png" className="mx-auto h-16 object-contain img-card-projects" />
            <img src="/images/symfony.png" className="mx-auto h-16 object-contain img-card-projects" />
             <img src="/images/nginx.png" className="mx-auto h-16 object-contain img-card-projects" />
            <img src="/images/docker.png" className="mx-auto h-16 object-contain img-card-projects" />
            <img src="/images/mysql.png" className="mx-auto h-16 object-contain img-card-projects" />
          </div>

          <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-2">Aplicação Web</h2>
  
            <video 
            className="mx-auto rounded-lg" 
            width="225" 
            height="420" 
            controls 
            preload="metadata"
            >
            <source src="/video/project-view-2.mp4" type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>
          </div>

          <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-2">Deploy Render</h2>
            <a
            href="https://bandscloud-frontend.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-button-color flex items-center justify-center gap-3 text-btn-project-page"
            >
            Demo Frontend
            </a>

          </div>

          <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-2">GitHub</h2>
            <a
            href="https://github.com/Henri-Di/BandsCloud"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-button-color flex items-center justify-center gap-3 text-btn-project-page"
            >
            Repositório GitHub
            </a>

          </div>
        </section>
        
        <Footer />
      </main>
    </>
  );
}
