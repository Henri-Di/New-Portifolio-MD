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
              O sistema de gestão de estoque foi desenvolvido para atender às necessidades específicas de controle, monitoramento e otimização do inventário em dois datacenters estratégicos da Caixa Econômica Federal, situados no Distrito Federal. Sob a responsabilidade do Departamento de Instalações, o sistema foi concebido para proporcionar uma solução robusta e eficiente, capaz de lidar com a complexidade e o volume de recursos presentes em ambientes corporativos de grande porte.

              Este sistema visa não apenas simplificar e agilizar as operações diárias relacionadas ao inventário, mas também assegurar um alto padrão de segurança e confiabilidade no tratamento dos dados. Ao implementar controles rigorosos sobre o registro, atualização e acesso às informações de estoque, o sistema garante a integridade e a disponibilidade dos dados, aspectos essenciais para a gestão eficaz dos recursos tecnológicos dos datacenters.

              Além disso, a plataforma proporciona uma visão consolidada e em tempo real dos ativos, facilitando a tomada de decisões estratégicas e o planejamento operacional. Com processos otimizados, o sistema contribui para a redução de erros humanos, diminuição de perdas, e melhoria contínua no gerenciamento dos recursos, resultando em maior eficiência, segurança e sustentabilidade das operações dos datacenters da Caixa Econômica Federal.
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
            <img src="/images/laravel.png" className="mx-auto h-16 object-contain img-card-projects" />
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
            <source src="/video/project-view-1.mp4" type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>
         </div>

          <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-2">Deploy Render</h2>
            <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-button-color flex items-center justify-center gap-3 text-btn-project-page"
            >
            Não disponível
            </a>

          </div>

          <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-2">GitHub</h2>
            <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-button-color flex items-center justify-center gap-3 text-btn-project-page"
            >
            Repositório GitHub Privado
            </a>
          </div>
        </section>
        
        <Footer />
      </main>
    </>
  );
}
