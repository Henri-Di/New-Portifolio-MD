import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../../assets/css/OvervView.css';
import { LoadingSpinner } from '../../components/ui/LoadingSpinner';
import { useEffect, useState } from 'react';
import { Info } from 'lucide-react';

export default function Projects() {
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
        <title>Projetos - M&D Desenvolvedor Web Fullstack</title>
      </Helmet>

      <main className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center px-4 main-container">
        <br />
        <header className="text-center mb-12 container-logo-page">
          <h1 className="text-4xl md:text-5xl font-bold text-violet-700 text-logo-page">
            M&D<br />
            <span className="block text-sm text-white">
              Matheus Diamantino - 
              Desenvolvedor Web Fullstack
            </span>
          </h1>
        </header>

        <section className="grid gap-6 max-w-6xl w-full container-father-cards-page">
          <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-2">Projeto 1</h2>
            <p className="text-sm text-gray-700">
              Projeto desenvolvido como parte de um estudo prático para testar e demonstrar habilidades em desenvolvimento fullstack, incluindo frontend com React e backend com Symfony.
            </p>
            <Link className="bg-button-color flex items-center justify-center gap-3 text-btn-project-page" to="/about">
              <Info size={18} /> Ver Projeto
            </Link>
          </div>

          <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-2">Projeto 2</h2>
            <p className="text-sm text-gray-700">
              Projeto desenvolvido como parte de um estudo prático para testar e demonstrar habilidades em desenvolvimento fullstack, incluindo frontend com React e backend com Symfony.
            </p>
            <Link className="bg-button-color flex items-center justify-center gap-3 text-btn-project-page" to="/projects">
              <Info size={18} /> Ver Projeto
            </Link>
          </div>

          <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-2">Projeto 3</h2>
            <p className="text-sm text-gray-700">
              Projeto desenvolvido como parte de um estudo prático para testar e demonstrar habilidades em desenvolvimento fullstack, incluindo frontend com React e backend com Symfony.
            </p>
            <Link className="bg-button-color flex items-center justify-center gap-3 text-btn-project-page" to="/skills">
              <Info size={18} /> Ver Projeto
            </Link>
          </div>

          <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-2">Projeto 4</h2>
            <p className="text-sm text-gray-700">
              Projeto desenvolvido como parte de um estudo prático para testar e demonstrar habilidades em desenvolvimento fullstack, incluindo frontend com React e backend com Symfony.
            </p>
            <Link className="bg-button-color flex items-center justify-center gap-3 text-btn-project-page" to="/services">
              <Info size={18} /> Ver Projeto
            </Link>
          </div>
        </section>

        <section className="grid gap-6 max-w-6xl w-full mt-10 container-father-cards-page">
          <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-2">Projeto 5</h2>
            <p className="text-sm text-gray-700">
              Projeto desenvolvido como parte de um estudo prático para testar e demonstrar habilidades em desenvolvimento fullstack, incluindo frontend com React e backend com Symfony.
            </p>
            <Link className="bg-button-color flex items-center justify-center gap-3 text-btn-project-page" to="/cv">
              <Info size={18} /> Ver Projeto
            </Link>
          </div>

          <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-2">Projeto 6</h2>
            <p className="text-sm text-gray-700">
              Projeto desenvolvido como parte de um estudo prático para testar e demonstrar habilidades em desenvolvimento fullstack, incluindo frontend com React e backend com Symfony.
            </p>
            <Link className="bg-button-color flex items-center justify-center gap-3 text-btn-project-page" to="/news">
              <Info size={18} /> Ver Projeto
            </Link>
          </div>

          <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-2">Projeto 7</h2>
            <p className="text-sm text-gray-700">
              Projeto desenvolvido como parte de um estudo prático para testar e demonstrar habilidades em desenvolvimento fullstack, incluindo frontend com React e backend com Symfony.
            </p>
            <Link className="bg-button-color flex items-center justify-center gap-3 text-btn-project-page" to="/contact">
              <Info size={18} /> Ver Projeto
            </Link>
          </div>

          <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-2">Projeto 8</h2>
            <p className="text-sm text-gray-700">
              Projeto desenvolvido como parte de um estudo prático para testar e demonstrar habilidades em desenvolvimento fullstack, incluindo frontend com React e backend com Symfony.
            </p>
            <Link className="bg-button-color flex items-center justify-center gap-3 text-btn-project-page" to="/blog">
              <Info size={18} /> Ver Projeto
            </Link>
          </div>
        </section>

        <footer className="bg-gray-900 text-white text-center py-6 w-full mt-12 footer-text">
          &copy; {new Date().getFullYear()} Matheus Henrique Ribeiro Diamantino — Desenvolvedor Web Fullstack
        </footer>
        <br />
      </main>
    </>
  );
}
