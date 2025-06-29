// src/pages/public/Contact.tsx
import { Helmet } from 'react-helmet';
import '../../assets/css/Over.css';
import '../../assets/css/OvervView.css';
import { LoadingSpinner } from '../../components/ui/LoadingSpinner';
import Navbar from '../../components/ui/Navbar';
import { useEffect, useState } from 'react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer'; 

export default function Contact() {
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
        <title>Contatos - M&D Desenvolvedor Web Fullstack</title>
      </Helmet>

      <main className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center px-4 main-container">
      <Header />

        {/* Navbar adicionada */}
        <Navbar />

        <section className="grid gap-6 max-w-6xl w-full container-father-cards-page">
          <a
            href="https://www.linkedin.com/in/matheus-diamantino-952b3121a/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code transition-all duration-500 ease-in-out hover:scale-105 hover:bg-[#0077B5] hover:text-white"
          >
            <br />
            <img
              src="/images/linkedin.png"
              alt="LinkedIn"
              className="mx-auto h-16 object-contain img-card-skills-page"
            />
          </a>

          <a
            href="mailto:matheus.diamantino20@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code transition-all duration-500 ease-in-out hover:scale-105 hover:bg-[#D44638] hover:text-white"
          >
            <br />
            <img
              src="/images/gmail-logo.png"
              alt="Gmail"
              className="mx-auto h-16 object-contain img-card-skills-page"
            />
          </a>

          <a
            href="https://github.com/Henri-Di"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code transition-all duration-500 ease-in-out hover:scale-105 hover:bg-[#333333] hover:text-white"
          >
            <br />
            <img
              src="/images/github.png"
              alt="GitHub"
              className="mx-auto h-16 object-contain img-card-skills-page"
            />
          </a>

          <a
            href="https://wa.me/5561999745671"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code transition-all duration-500 ease-in-out hover:scale-105 hover:bg-[#25D366] hover:text-white"
          >
            <br />
            <img
              src="/images/whatsapp.png"
              alt="WhatsApp"
              className="mx-auto h-16 object-contain img-card-skills-page"
            />
          </a>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </main>
    </>
  );
}
