---
marp: true
theme: default
paginate: true
---

# Project Setup

## How to run your code locally and in the cloud

---

# Running locally

```bash
npm run dev
```

---

# Docker

What is docker?

- Lightweight virtualization
- Standard way to run software across clouds and OS's
- Perfect for microservice architecture
- Easy management of dependencies
- Easy to package and share runnable software

---

# Containers

Docker runs your software in a container where it thinks it has a whole computer for itself.

Any dependencies a container has installed are only available inside that container. You can run ten different versions of Wordpress and MySQL on the same server completely isolated from each other!

---

# Images

A piece of software packaged with docker is called an image. Images can be private or they can be uploaded to places like Docker Hub where anyone can download and run the software within seconds.

All of the major open source software is available on docker!

```bash
# Get a MongoDB database running in just a few seconds
docker run -p 27017:27017 -it mongo
```

---

# Docker Compose

It is tedious to install and maintain databases, queues etc. directly on your workstation. Especially if you are working on two projects that require different versions of MongoDB for example.

A docker-compose.yaml is a file that can describe exactly what your project needs to run. Anyone who clones the repo can get the project up and running within moments.

```bash
docker compose up
```

---

# docker-compose.yaml

```yaml
version: "3"

services:
  api:
    build: .
    ports:
      - 3000:3000
  mongo:
    image: mongo
    ports:
      - 27017:27017
```

---

# Dockerfile

The Dockerfile is a set of instructions that docker uses to package your software.

When building, docker can add any files needed, setup environment variables and run any commands you need.

```Dockerfile
# Overly simplified Dockerfile for an nginx web server

FROM debian
RUN apt install -y nginx
CMD ["nginx", "-g", "daemon off;"]
```

---

# Building with docker

```Dockerfile
FROM node:16
WORKDIR /api
ADD * /app/
RUN npm run ci
CMD [ "npm", "run", "start" ]
```

```bash
docker build -t my-api .
docker run -p 3000:3000 -t my-api
```

---

# Docker run
