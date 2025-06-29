// src/pages/public/CV.tsx
import { Helmet } from 'react-helmet';
import '../../assets/css/Over.css';
import '../../assets/css/OvervView.css';
import { LoadingSpinner } from '../../components/ui/LoadingSpinner';
import Navbar from '../../components/ui/Navbar';
import { useEffect, useState } from 'react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import AlertMessage from '../../components/ui/AlertMessage'; 

export default function News() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Helmet>
        <title>Novidades - M&D Desenvolvedor Web Fullstack</title>
      </Helmet>
      <main className="min-h-screen bg-white text-gray-800 flex flex-col items-center px-4 main-container container-news-page">
        <Header />
        <Navbar />
        <br />
        <br />
        <section className="max-w-2xl w-full text-center mt-10 p-6 bg-violet-100 rounded-2xl shadow-md">
          
          <AlertMessage
            type="warning"
            message="Esta página está em construção. Em breve, o conteúdo estará disponível com todas as informações e recursos planejados para esta seção."
          />
        </section>
        <br />
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
