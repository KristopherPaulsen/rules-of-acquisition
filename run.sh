PORT="JUST_TO_FILL_ENV_VAR"
POSTGRES_PORT="JUST_TO_FILL_ENV_VAR"

docker-compose down && \
docker-compose build && \
docker-compose up
