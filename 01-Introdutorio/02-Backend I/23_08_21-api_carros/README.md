# Doc Api

- [Package.json](#packagejson)
- [Index](#indexjs)
- [Database](#databasejs)
- [Clients](#clientsjs)
- [Cars](#carsjs)

## Package.json

```json
 "start": "node -r sucrase/register --watch src/index.js"
```

- node: irá rodar o projeto
- r: é uma flag do node para passar algum comando em conjunto ex.: `-r sucrase/register` que irá transpilar o código para uma versão anterior do javascript que será capaz do node entender
- watch: argumento enviado ao node para dizer que é para ficar olhando o arquivo e reexecutar a cada alteração no arquivo. Executado através do envio da seguinte forma. `--watch arquivo.js`

## index.js

Fica responsável apenas para iniciar o projeto. Criando o servidor http, definindo as rotas e subindo o servidor para escutar a porta selecionada.

## database.js

Arquivo para ser utilizado como banco de dados da aplicação, armazenando as informações que forem necessárias

## clients.js

Arquivo que ira conter as rotas relacionadas aos clientes(usuários) da aplicação

## cars.js

Arquivo que ira conter as rotas relacionadas aos carros da aplicação
