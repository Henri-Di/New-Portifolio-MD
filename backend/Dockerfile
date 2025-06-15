FROM php:8.2-fpm

ARG APP_ENV=prod
ENV APP_ENV=${APP_ENV}

# Instalar dependências
RUN apt-get update && apt-get install -y \
    git unzip libzip-dev libonig-dev libicu-dev libxml2-dev \
    && docker-php-ext-install zip intl pdo_mysql

# Instalar Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Diretório de trabalho
WORKDIR /var/www/html

# Copiar código
COPY . .

# Instalar dependências PHP
RUN if [ "$APP_ENV" = "prod" ]; then \
        composer install --no-interaction --optimize-autoloader --no-dev; \
    else \
        composer install --no-interaction --optimize-autoloader; \
    fi

# Expõe a porta usada pelo PHP-FPM (não obrigatória, mas informativa)
EXPOSE 9000

# Comando para iniciar o PHP-FPM
CMD ["php-fpm"]
