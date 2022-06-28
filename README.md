# Express REST API minilal typescript template

## A Simple and Minimalistic express Template in Typescript to create a REST API 

This project is a template for express with typescript 
configured and for you to create an API in modularized
fashion similar to MVC fashion. A Dockerfile is also
provided which helps in deploying the application easily.

## Features provided 💡

* `env-cmd` to store secrets in .env files.
* `typescript` as the language allowing for a type safe
programming.
* `express` as the web framework for programming the API.
* `Dockerfile` to launch the API server in containers.
* `yarn` the package manager

## Installation ⬇️

### Method 1
 Click on the **use this template** button and copy the
repo under your account.

![Use Template](https://raw.githubusercontent.com/ceoldevs/express-ts-minimal/main/.github/assets/use-template.png)

### Method 2

Install `degit` from npm/yarn or use npx command and clone
the repo using the below command.

```bash
mkdir express-ts-minimal
cd express-ts-minimal
degit https://github.com/ceoldevs/express-ts-minimal.git 
```
or
```bash
mkdir express-ts-minimal
cd express-ts-minimal
npx degit https://github.com/ceoldevs/express-ts-minimal.git 
```

## File structure 📁

```bash
.
├── dist
├── Dockerfile
├── LICENSE
├── package.json
├── README.md
├── src
│   ├── controllers
│   ├── index.ts
│   ├── models
│   └── routes
├── tsconfig.json
└── yarn.lock
```

All the code will be written under `src` director

* index.ts - contains the entrypoint file where middlewares
can be imported

* controllers - the main logic of the API server is written
in this directory

* models - the database models for ORM/ODM is written in 
this directory

* routes - the route endpoints for users to access are
mapped with the logic from the controllers in this directory

<!--

## More Features 📢

* Going to add the `models` soon.
-->
