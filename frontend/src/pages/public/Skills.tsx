import { Helmet } from 'react-helmet';
import '../../assets/css/OvervView.css';
import { LoadingSpinner } from '../../components/ui/LoadingSpinner';
import { useEffect, useState } from 'react';


export default function Skills() {
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
        <title>Skills - M&D Desenvolvedor Web Fullstack</title>
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
            <h2 className="text-xl font-semibold text-violet-800 mb-4">PHP</h2>
                <img src="/images/php.png" className="mx-auto h-16 object-contain img-card-skills-page"/>
        </div>

        <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-4">Symfony</h2>
                <img src="/images/symfony.png" className="mx-auto h-16 object-contain img-card-skills-page"/>
        </div>

        <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-4">Laravel</h2>
                <img src="/images/laravel.png" className="mx-auto h-16 object-contain img-card-skills-page"/>
        </div>

         <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-4">React Native</h2>
                <img src="/images/atom.png" className="mx-auto h-16 object-contain img-card-skills-page"/>
        </div>
        </section>

        <section className="grid gap-6 max-w-6xl w-full mt-10 container-father-cards-page">
           <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-4">JavaScript</h2>
                <img src="/images/javascript.png" className="mx-auto h-16 object-contain img-card-skills-page"/>
        </div>

        <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-4">TypeScript</h2>
                <img src="/images/typescript.png" className="mx-auto h-16 object-contain img-card-skills-page"/>
        </div>

         <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-4">Tailwind CSS</h2>
                <img src="/images/tailwind.png" className="mx-auto h-16 object-contain img-card-skills-page"/>
        </div>

         <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-4">Vite JS</h2>
                <img src="/images/vite.png" className="mx-auto h-16 object-contain img-card-skills-page"/>
        </div>
        </section>

        <section className="grid gap-6 max-w-6xl w-full mt-10 container-father-cards-page">
           <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-4">SCSS</h2>
                <img src="/images/saas.png" className="mx-auto h-16 object-contain img-card-skills-page"/>
        </div>

        <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-4">Bootstrap</h2>
                <img src="/images/bootstrap.png" className="mx-auto h-16 object-contain img-card-skills-page"/>
        </div>

         <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-4">Docker</h2>
                <img src="/images/docker.png" className="mx-auto h-16 object-contain img-card-skills-page"/>
        </div>

         <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-4">SQL Server</h2>
                <img src="/images/sql.jpg" className="mx-auto h-16 object-contain img-card-skills-page"/>
        </div>
        </section>

        <section className="grid gap-6 max-w-6xl w-full mt-10 container-father-cards-page">
           <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-4">MySQL</h2>
                <img src="/images/mysql.png" className="mx-auto h-16 object-contain img-card-skills-page"/>
        </div>

        <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-4">PostgreSQL</h2>
                <img src="/images/postgresql.png" className="mx-auto h-16 object-contain img-card-skills-page"/>
        </div>

         <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-4">Nginx</h2>
                <img src="/images/nginx.png" className="mx-auto h-16 object-contain img-card-skills-page"/>
        </div>

         <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-4">GitHub</h2>
                <img src="/images/github.png" className="mx-auto h-16 object-contain img-card-skills-page"/>
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
