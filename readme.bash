#!/bin/bash

# Cores
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
NC='\033[0m'

clear

echo -e "${CYAN}==============================================="
echo "         Portfólio Desenvolvedor Fullstack      "
echo -e "===============================================${NC}"

echo -e "${YELLOW}🧾 Descrição:${NC}"
echo "Este é um projeto de portfólio profissional fullstack,"
echo "desenvolvido para apresentar minhas habilidades técnicas,"
echo "projetos, experiências e formas de contato."

echo
echo -e "${YELLOW}🛠️ Tecnologias Utilizadas:${NC}"
echo -e "- ${GREEN}Frontend:${NC} React, TypeScript, Tailwind CSS, Vite"
echo -e "- ${GREEN}Backend:${NC} PHP 8, Symfony"
echo -e "- ${GREEN}Banco de Dados:${NC} MySQL"
echo -e "- ${GREEN}Containerização:${NC} Docker + Docker Compose"
echo -e "- ${GREEN}Deploy:${NC} Render.com"

echo
echo -e "${YELLOW}📁 Estrutura do Projeto:${NC}"
echo "📁 backend/             # Aplicação Symfony (API)"
echo "📁 frontend/            # Aplicação React com Vite"
echo "📄 docker-compose.yml   # Orquestração de containers"
echo "📄 README.md            # Documentação principal"
echo "📄 .env                 # Variáveis de ambiente"

echo
echo -e "${YELLOW}🚀 Como Executar com Docker:${NC}"
echo "1. Clone o repositório:"
echo -e "   ${GREEN}git clone https://github.com/Henri-Di/SeuRepositorio.git${NC}"
echo -e "   ${GREEN}cd SeuRepositorio${NC}"

echo
echo "2. Suba os containers:"
echo -e "   ${GREEN}docker-compose up --build -d${NC}"

echo
echo "3. Acesse as aplicações:"
echo -e "   Frontend: ${CYAN}http://localhost:3000${NC}"
echo -e "   Backend (API): ${CYAN}http://localhost:8000/api${NC}"

echo
echo "4. Para acompanhar os logs:"
echo -e "   ${GREEN}docker-compose logs -f${NC}"

echo
echo -e "${YELLOW}🧪 Testes:${NC}"
echo -e "- Symfony: ${GREEN}php bin/phpunit${NC}"
echo -e "- React: ${GREEN}npm test${NC} (na pasta frontend)"

echo
echo -e "${YELLOW}🔐 Autenticação:${NC}"
echo "- Utiliza JWT para acesso a rotas administrativas"
echo "- Apenas usuários com ROLE_ADMIN acessam /admin"

echo
echo -e "${YELLOW}📤 Deploy com Render:${NC}"
echo "- Frontend: hospedado como Web Service (build via Vite)"
echo "- Backend: hospedado como Web Service Symfony (PHP-FPM)"
echo "- Banco de Dados: Render MySQL Cloud Database"

echo
echo -e "${YELLOW}📫 Contato:${NC}"
echo -e "- LinkedIn: ${CYAN}https://www.linkedin.com/in/matheus-diamantino-952b3121a/${NC}"
echo -e "- GitHub:   ${CYAN}https://github.com/Henri-Di${NC}"
echo -e "- E-mail:   ${CYAN}matheus.diamantino20@gmail.com${NC}"

echo
echo -e "${CYAN}==============================================="
echo "        Obrigado por visitar meu projeto!"
echo "        Execute com sucesso e explore :)"
echo -e "===============================================${NC}"
