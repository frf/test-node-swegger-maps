## Create server NodJS with typescript
## Add express microframework
- yarn start:dev
  
"scripts": {
    "start:dev": "tsnd --transpile-only --ignore-watch node_modules --respawn src/server.ts",
    "start": "ts-node src/server.ts",
}

## Add express microframework
- yarn add express

## Add types express
- yarn add @types/express -D

## Use JSON in express
app.use(express.json());

## Add cors
- yarn add cors
  
## Add typescript cors
- yarn add @types/cors -D

docker-compose up
