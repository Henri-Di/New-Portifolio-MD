# Stage 1: Build com Node.js
FROM node:20-alpine AS build

WORKDIR /app

# Copia somente arquivos necessários para cache inteligente
COPY package*.json ./

# Instala as dependências com cache (requer BuildKit ativado)
RUN --mount=type=cache,target=/root/.npm npm ci 

# Copia o restante da aplicação
COPY . .

# Gera o build de produção
RUN npm run build

# Stage 2: Serve com NGINX
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
