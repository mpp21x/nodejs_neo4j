# Nodejs Test

## Installation

1. Clone the repository

2. Use the docker compose to run the project

```bash
$ docker compose up -d
```

3. Wait a while to the containers be ready(about 1 minute) and start to create the Neo4j nodejs by running the following command

```bash
$ docker exec -it nodejs-to-neo4j bash -c "npm run start"
```


Shutdown the project

```bash
$ docker compose down
```
