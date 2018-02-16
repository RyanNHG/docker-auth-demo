# Docker | Authentication Demo
> Adding a decoupled authentication layer with Docker.


### Overview

Instead of having your web application be responsible for authentication, it might be useful to have a separate service like NGINX protect your app from unauthorized viewers.

This project creates a `web` and `auth` service, and only exposes ports of the `auth` to the outside world.

All requests are first filtered through this `auth` service, to prevent anonymous access to the `web` app.


### Check it out!

1. Install [Docker](https://www.docker.com/)

1. Run `docker-compose up`

1. Go to [http://localhost:7000](http://localhost:7000) with these credentials:
  - Username: `username`
  - Password: `password`
