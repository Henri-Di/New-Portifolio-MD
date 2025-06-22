# Portfólio Desenvolvedor Fullstack

---

## 🧾 Descrição

Este é um projeto de portfólio profissional fullstack, desenvolvido para apresentar minhas habilidades técnicas, projetos, experiências e formas de contato.

---

## 🛠️ Tecnologias Utilizadas

- **Frontend:** React, TypeScript, Tailwind CSS, Vite  
- **Backend:** PHP 8, Symfony  
- **Banco de Dados:** MySQL  
- **Containerização:** Docker + Docker Compose  
- **Deploy:** Render.com

---

## 📁 Estrutura do Projeto

```
backend/             # Aplicação Symfony (API)
frontend/            # Aplicação React com Vite
docker-compose.yml   # Orquestração de containers
README.md            # Documentação principal
.env                 # Variáveis de ambiente
```

---

## 🚀 Como Executar com Docker

1. Clone o repositório:

   ```bash
   git clone https://github.com/Henri-Di/SeuRepositorio.git
   cd SeuRepositorio
   ```

2. Suba os containers:

   ```bash
   docker-compose up --build -d
   ```

3. Acesse as aplicações:

   - Frontend: [http://localhost:3000](http://localhost:3000)  
   - Backend (API): [http://localhost:8000/api](http://localhost:8000/api)

4. Para acompanhar os logs:

   ```bash
   docker-compose logs -f
   ```

---

## 🧪 Testes

- Symfony:

  ```bash
  php bin/phpunit
  ```

- React (na pasta frontend):

  ```bash
  npm test
  ```

---

## 🔐 Autenticação

- Utiliza JWT para acesso a rotas administrativas  
- Apenas usuários com `ROLE_ADMIN` acessam `/admin`

---

## 📤 Deploy com Render

- Frontend: hospedado como Web Service (build via Vite)  
- Backend: hospedado como Web Service Symfony (PHP-FPM)  
- Banco de Dados: Render MySQL Cloud Database

---

## 📫 Contato

- LinkedIn: [https://www.linkedin.com/in/matheus-diamantino-952b3121a/](https://www.linkedin.com/in/matheus-diamantino-952b3121a/)  
- GitHub: [https://github.com/Henri-Di](https://github.com/Henri-Di)  
- E-mail: matheus.diamantino20@gmail.com

---

## 🙏 Obrigado por visitar meu projeto!  
Execute com sucesso e explore :)
