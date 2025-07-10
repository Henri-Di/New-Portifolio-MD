import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { 
  User,
  FolderKanban,
  BadgeCheck,
  Handshake,
  FileText,
  Megaphone,
  Mail,
  BookOpen,
} from 'lucide-react';

import { LoadingSpinner } from '../../components/ui/LoadingSpinner'; 
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer'; 
import '../../assets/css/Over.css';
import '../../assets/css/OvervView.css';

export default function Home() {
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
        <title>Home - M&D Desenvolvedor Web Fullstack</title>
      </Helmet>

      <main className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center px-4 main-container">
      <Header />

        {/* Cards - Primeira Linha */}
        <section className="grid gap-6 max-w-6xl w-full container-father-cards-page">
          <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-2 flex items-center justify-center gap-2">
              <User size={20} /> Sobre Mim
            </h2>
            <p className="text-sm text-gray-700">Conheça minha trajetória, formação e o que me motiva na área de tecnologia.</p>
            <Link className="bg-button-color inline-flex justify-center items-center gap-3 mt-2 text-center text-btn-home-page" to="/about">
              <User size={18} /> Sobre Mim
            </Link>
          </div>

          <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-2 flex items-center justify-center gap-2">
              <FolderKanban size={20} /> Projetos
            </h2>
            <p className="text-sm text-gray-700">Veja os projetos que desenvolvi utilizando tecnologias modernas e boas práticas.</p>
            <Link className="bg-button-color inline-flex justify-center items-center gap-3 mt-2 text-center text-btn-home-page" to="/projects">
              <FolderKanban size={18} /> Meus Projetos
            </Link>
          </div>

          <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-2 flex items-center justify-center gap-2">
              <BadgeCheck size={20} /> Skills
            </h2>
            <p className="text-sm text-gray-700">Confira as tecnologias, frameworks e ferramentas com as quais trabalho.</p>
            <Link className="bg-button-color inline-flex justify-center items-center gap-3 mt-2 text-center text-btn-home-page" to="/skills">
              <BadgeCheck size={18} /> Minhas Skills
            </Link>
          </div>

          <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-2 flex items-center justify-center gap-2">
              <Handshake size={20} /> Serviços
            </h2>
            <p className="text-sm text-gray-700">Descubra os tipos de serviços que ofereço e como posso ajudar no seu projeto.</p>
            <Link className="bg-button-color inline-flex justify-center items-center gap-3 mt-2 text-center text-btn-home-page" to="/services">
              <Handshake size={18} /> Solicite Orçamento
            </Link>
          </div>
        </section>

        {/* Cards - Segunda Linha */}
        <section className="grid gap-6 max-w-6xl w-full mt-10 container-father-cards-page">
          <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-2 flex items-center justify-center gap-2">
              <FileText size={20} /> Currículo
            </h2>
            <p className="text-sm text-gray-700">Visualize e baixe meu currículo com detalhes sobre experiências e qualificações.</p>
            <Link className="bg-button-color inline-flex justify-center items-center gap-3 mt-2 text-center text-btn-home-page" to="/cv">
              <FileText size={18} /> Meu Currículo
            </Link>
          </div>

          <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-2 flex items-center justify-center gap-2">
              <Megaphone size={20} /> Novidades
            </h2>
            <p className="text-sm text-gray-700">Fique por dentro das atualizações, eventos e conteúdos que estou produzindo.</p>
            <Link className="bg-button-color inline-flex justify-center items-center gap-3 mt-2 text-center text-btn-home-page" to="/news">
              <Megaphone size={18} /> Veja Novidades
            </Link>
          </div>

          <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-2 flex items-center justify-center gap-2">
              <Mail size={20} /> Contatos
            </h2>
            <p className="text-sm text-gray-700">Entre em contato comigo para tirar dúvidas ou iniciar um projeto.</p>
            <Link className="bg-button-color inline-flex justify-center items-center gap-3 mt-2 text-center text-btn-home-page" to="/contact">
              <Mail size={18} /> Meus Contatos
            </Link>
          </div>

          <div className="bg-violet-100 p-6 rounded-2xl shadow-md text-center cards-section-frontend-code">
            <h2 className="text-xl font-semibold text-violet-800 mb-2 flex items-center justify-center gap-2">
              <BookOpen size={20} /> Blog
            </h2>
            <p className="text-sm text-gray-700">Leia artigos sobre desenvolvimento, carreira e dicas técnicas.</p>
            <Link className="bg-button-color inline-flex justify-center items-center gap-3 mt-2 text-center text-btn-home-page" to="/blog">
              <BookOpen size={18} /> Meu Blog
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
