FROM php:8.2-fpm

ARG APP_ENV=prod
ENV APP_ENV=${APP_ENV}

# Instalar dependências do sistema
RUN apt-get update && apt-get install -y \
    git unzip libzip-dev libonig-dev libicu-dev libxml2-dev \
    && docker-php-ext-install zip intl pdo_mysql

# Instalar Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Diretório de trabalho
WORKDIR /var/www/html

# Copiar o código para dentro do container
COPY . .

# Instalar dependências do Symfony
RUN if [ "$APP_ENV" = "prod" ]; then \
        composer install --no-interaction --optimize-autoloader --no-dev; \
    else \
        composer install --no-interaction --optimize-autoloader; \
    fi

# Expor a porta que o Render usará
EXPOSE 10000

# Iniciar o servidor embutido do PHP apontando para a pasta pública
CMD ["php", "-S", "0.0.0.0:10000", "-t", "public"]
