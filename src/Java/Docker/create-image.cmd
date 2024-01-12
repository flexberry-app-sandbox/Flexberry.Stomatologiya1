docker build --no-cache -f SQL\Dockerfile.PostgreSql -t stomatologiya-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t stomatologiya-java/app ../../..
