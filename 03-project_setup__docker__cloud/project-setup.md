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

# Dockerfile

The Dockerfile is a set of instructions that docker uses to package your software.

When building, docker can add any files needed, setup environment variables and run any commands you need.

```Dockerfile
# Overly simplified Dockerfile for an nginx web server

FROM debian
RUN apt install -y nginx
CMD ["nginx", "-g", "daemon off;"]
```

```bash
docker build -t my-nginx .
docker run -p 80:80 -t my-nginx
```

---

# Docker run
