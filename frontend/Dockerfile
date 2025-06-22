# Stage 1: Build com Node.js
FROM node:20-alpine AS build

WORKDIR /app

# Copia apenas package.json e package-lock.json (se existir) para aproveitar cache do Docker
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante do código da aplicação
COPY . .

# Executa build da aplicação
RUN npm run build

# Stage 2: Serve o build estático com NGINX
FROM nginx:alpine

# Copia build do Vite (pasta dist/) da etapa anterior
COPY --from=build /app/dist /usr/share/nginx/html

# Copia arquivo de configuração customizado para SPA (rotas client-side)
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# Comando padrão para rodar o NGINX em foreground
CMD ["nginx", "-g", "daemon off;"]
