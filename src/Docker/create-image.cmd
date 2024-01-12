docker build --no-cache -f SQL\Dockerfile.PostgreSql -t stomatologiya/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t stomatologiya/app ../..
