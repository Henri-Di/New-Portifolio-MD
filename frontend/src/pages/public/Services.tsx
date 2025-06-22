// src/pages/public/Services.tsx
import { Helmet } from 'react-helmet';
import '../../assets/css/OvervView.css';
import { LoadingSpinner } from '../../components/ui/LoadingSpinner';
import { useEffect, useState } from 'react';
import FormService from '../../components/ui/FormsServices';
import Navbar from '../../components/ui/Navbar';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer'; 

export default function Services() {
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
        <title>Serviços - M&D Desenvolvedor Web Fullstack</title>
      </Helmet>

      <main className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center px-4  main-container-sevices-page">
      <Header />

        {/* Navbar adicionada */}
        <Navbar />

        {/* Formulário de Projeto */}
        <FormService />

        <Footer />
      </main>
    </>
  );
}
