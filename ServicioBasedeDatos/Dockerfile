FROM mysql:5.7

ENV MYSQL_ROOT_PASSWORD=rootpassword
ENV MYSQL_DATABASE=mydb

COPY setup.sql /docker-entrypoint-initdb.d/
