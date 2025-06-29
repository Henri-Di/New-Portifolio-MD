// src/pages/public/CV.tsx
import { Helmet } from 'react-helmet';
import '../../assets/css/Over.css';
import '../../assets/css/OvervView.css';
import { LoadingSpinner } from '../../components/ui/LoadingSpinner';
import Navbar from '../../components/ui/Navbar';
import { useEffect, useState } from 'react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import { FileDown } from 'lucide-react';

export default function CV() {
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
        <title>Currículo - M&D Desenvolvedor Web Fullstack</title>
      </Helmet>

      <main className="min-h-screen bg-white text-gray-800 flex flex-col items-center px-4 main-container container-cv-page">
        <Header />
        <Navbar />

        <section className="max-w-2xl w-full text-center mt-10 p-6 bg-violet-100 rounded-2xl shadow-md">

          <p className="text-sm text-gray-700 mb-6 text-cv-page">
            Você pode visualizar ou baixar meu currículo atualizado clicando no botão abaixo.
          </p>
          <a
            href="/Curriculo-Matheus-Henrique-Ribeiro-Diamantino.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-2 bg-button-color text-btn-cv-page font-semibold py-2 px-4 rounded-lg shadow-md transition hover:brightness-90 btn-cv-page"
          >
            <FileDown size={18} />
            Baixar Currículo (PDF)
          </a>

        </section>
        <br /><br /><br />
        <br /><br /><br />
        <br /><br /><br /> 
        <br />
        <Footer />
      </main>
    </>
  );
}
