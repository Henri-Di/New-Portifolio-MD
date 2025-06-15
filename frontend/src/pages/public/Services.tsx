// src/pages/public/Services.tsx
import { Helmet } from 'react-helmet';
import '../../assets/css/OvervView.css';
import { LoadingSpinner } from '../../components/ui/LoadingSpinner';
import { useEffect, useState } from 'react';
import ProjectForm from '../../components/ui/FormsServices';

export default function Services() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Helmet>
        <title>Serviços - M&D Desenvolvedor Web Fullstack</title>
      </Helmet>

      <main className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center px-4  main-container-sevices-page">
        <br />
        <header className="text-center mb-12 container-logo-page">
          <h1 className="text-4xl md:text-5xl font-bold text-violet-700 text-logo-page">
            M&D<br />
            <span className="block text-sm text-white">
              Matheus Diamantino - Desenvolvedor Web Fullstack
            </span>
          </h1>
        </header>

        {/* Formulário de Projeto */}
        <ProjectForm />

        <footer className="bg-gray-900 text-white text-center py-6 w-full mt-12 footer-text">
          &copy; {new Date().getFullYear()} Matheus Henrique Ribeiro Diamantino — Desenvolvedor Web Fullstack
        </footer>
        <br />
      </main>
    </>
  );
}
