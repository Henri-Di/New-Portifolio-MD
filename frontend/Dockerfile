# Stage 1: Build com Node.js
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve build estático com NGINX
FROM nginx:alpine

# Copia build do Vite (pasta dist/)
COPY --from=build /app/dist /usr/share/nginx/html

# Copia arquivo de configuração customizado para Vite SPA (fallback)
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
