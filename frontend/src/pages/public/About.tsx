// src/pages/public/Contact.tsx
import { Helmet } from 'react-helmet';
import '../../assets/css/Over.css';
import '../../assets/css/OvervView.css';
import { LoadingSpinner } from '../../components/ui/LoadingSpinner';
import Navbar from '../../components/ui/Navbar';
import { useEffect, useState } from 'react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer'; 

export default function () {
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
        <title>Sobre Mim - M&D Desenvolvedor Web Fullstack</title>
      </Helmet>

      <main className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center px-4 main-container">
      <Header />

         {/* Navbar adicionada */}
         <Navbar />

        <section className="grid gap-6 max-w-6xl w-full container-father-cards-page">

          <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code text-justify">
            <p className="text-base text-violet-800 font-semibold mb-3">
              Olá! Eu sou Matheus Diamantino, um desenvolvedor web fullstack dedicado e apaixonado por tecnologia, localizado em Brasília, DF. Minha missão é criar soluções digitais robustas e eficientes, feitas sob medida para atender às necessidades específicas de cada empresa e fortalecer sua presença no ambiente digital.
            </p>
          </div>

          <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code text-justify">
            <p className="text-base text-violet-800 font-semibold mb-3">
              Combinando inovação, dedicação e as melhores práticas do mercado, trabalho desde a arquitetura até a entrega final dos projetos, garantindo que cada aplicação seja segura, escalável e funcional, e que ofereça resultados concretos para os negócios dos meus clientes.
            </p>
          </div>

          <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code text-justify">
            <p className="text-base text-violet-800 font-semibold mb-3">
              Mais do que desenvolver softwares, meu compromisso é construir ferramentas digitais que causem impacto real, agregando valor à marca dos meus clientes e contribuindo para o crescimento sustentável e a consolidação no mercado competitivo.
            </p>
          </div>

          <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code text-justify">
            <p className="text-base text-violet-800 font-semibold mb-3">
              Procuro entender profundamente os desafios e objetivos de cada projeto para entregar soluções personalizadas e estratégicas. Juntos, podemos transformar sua ideia em uma plataforma digital eficaz, que amplie sua visibilidade e conecte você ao seu público.
            </p>
          </div>

        </section>

        <Footer />
      </main>
    </>
  );
}
