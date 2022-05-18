
# This command create a postgres database

## To run PostgreSQL on Docker, run the following in your Terminal

```bash
 docker run --name postgres-nest -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres
```

- name = --name postgres-nest
- port = -p 5432:5432
- password = POSTGRES_PASSWORD=postgres
- despatch mode = -d postgres


## This command install typeorm and pg is a postgres driver

```bash
yarn add typeorm @nestjs/typeorm pg
```