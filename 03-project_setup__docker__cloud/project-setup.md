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

Docker enabled developers to package software into _images_. An image can be shared with other developers or deployed to servers and cloud services. All they need is docker and the image to be able to run your software.

- Similar to virtualization but without the cost of running an entire OS
- Works on linux, Mac OS, Windows and different CPU architectures
- Enables easy management of dependencies and resource limits
- Perfect for running modern microservices
- Also perfect for keeping old legacy software alive

<!--
I often think of a docker image as a set of instructions on how to build a fish tank, detailing what type of water, temperature and food your fish (the software) needs.
-->

---

# Images

A piece of software packaged with docker is called an image. Images can be private or they can be uploaded to places like Docker Hub where anyone can download and run the software within seconds.

All of the major open source software is available on docker!

```bash
# Get a MongoDB database running in just a few seconds
docker run -p 27017:27017 -it mongo
```

---

# Containers

When docker runs the software inside an image, the running state is called a _container_. Each container is like an isolated bubble running only the software itself. Filesystem and network access to a container needs to be declared in advance.

Thanks to the isolating nature of containers, it is possible to run several different versions of the same software on the same computer.

```bash
docker run -p 27017:27017 -t mongo:4
docker run -p 28000:27017 -t mongo:6 # Run mongo 6 on a different port
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
