FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=swarmdb
EXPOSE 3306
COPY database.sql /docker-entrypoint-initdb.d/
