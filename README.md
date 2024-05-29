# Development

## 1. Root folder

- Install formatting tools: `npm install`
  > This will auto-format codes upon `git commit`

## 2. Frontend folder

- Install packages: `npm install`

## 3. Backend folder

# Run project

## 1. Database

- Go to database folder: `cd database`
- Start services: `docker compose up`
  > Install **Docker** is required
- Database connection credentials:
  ```
  host: localhost
  port: 5432
  database: meono
  username: root
  password: root
  ```
  > Use **Dbeaver** to connect to database

## 2. Frontend

- Go to frontend folder: `cd frontend`
- Start service: `npm run dev`

## 3. Backend
