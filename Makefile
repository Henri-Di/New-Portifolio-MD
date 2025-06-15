PROJECT_NAME=portfolio
DOCKER_COMPOSE=docker-compose -p $(PROJECT_NAME)

up:
	$(DOCKER_COMPOSE) up -d --build

down:
	$(DOCKER_COMPOSE) down

logs:
	$(DOCKER_COMPOSE) logs -f

restart:
	$(DOCKER_COMPOSE) down && $(DOCKER_COMPOSE) up -d --build

sh-backend:
	docker exec -it backend bash

sh-frontend:
	docker exec -it frontend sh

sh-db:
	docker exec -it mysql_db bash

migrate:
	docker exec -it backend php bin/console doctrine:migrations:migrate

fixtures:
	docker exec -it backend php bin/console doctrine:fixtures:load
