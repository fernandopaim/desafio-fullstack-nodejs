# Desafio Full-Stack

Construção de API Node.js com Front-end em Vue.js e Mongo DB

## Breve relatório

Inicialmente o projeto do backend foi desenvolvido usando o boilerplate do próprio CLI do express, porém por ser um boilerplate mais simples para projetos mais iniciais, foi necessário a migração para outro. Atualmente está sendo usado um outro boilerplate disponível no github de forma aberta para a organização da aplicação. Apesar de se poder criar um projeto do zero, acredito que o uso de uma estrutura mínima é importante para ter um padrão e uma estrutura lógica para novos desenvolvedores que participarem do projeto. O framework Express não é limitado a um boilerplate ou alguma estrutura, pode ser desenvolvido inclusive com os mais famosos MVC ou mesmo MVT.

Repositório fonte:
```https://github.com/hagopj13/node-express-mongoose-boilerplate```

## Observações

Estou concluindo o projeto. Vou integrar os docker-compose files em apenas um na raiz do projeto.
Estou criando os testes.
Estou criando endpoint de estatísticas.

## Rodar o projeto em modo development

Para rodar o projeto, atualmente existem 2 docker-compose files, cada um na pasta do projeto frontend e backend. Veja a seguir os comandos:

### Rodar backend by docker

Primeiramente você precisa acessar a pasta do projeto, exemplo:

```cd ./backend```

Instalar dependências:

```yarn install```

Criar e levantar servidor

```yarn docker:dev```

Desligar servidor

```yarn docker:down```

### Rodar frontend by docker

Primeiramente você precisa acessar a pasta do projeto, exemplo:

```cd ./frontend```

Instalar dependências:

```yarn install```

Criar e levantar servidor

```docker-compose up```

Desligar servidor

```docker-compose down```

### Acessar frontend no navegador
[Link local](http://localhost:8080)

### Testar backend endpoints usando postman
[Link compartilhado](https://www.getpostman.com/collections/089e5397b3ec8a7edc7d)