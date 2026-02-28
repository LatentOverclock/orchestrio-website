.PHONY: bootstrap up down restart logs build

bootstrap:
	git submodule update --init agents-md
	npm ci --no-audit --no-fund

up:
	docker network create edge-proxy || true
	docker compose up -d --build

down:
	docker compose down

restart:
	docker compose up -d --force-recreate

logs:
	docker compose logs -f --tail=120

build:
	docker compose build
