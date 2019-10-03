# Proyecto Front-end de SpecAtelier

**Recomendaciones:**

- Este proyecto está desarrollado con la versión `12.10.0` de [Node.js](https://nodejs.org/), por lo cual, se recomienda tener una versión igual o superior.
- Se recomienda utilizar `npm` por sobre `yarn` por temas de seguridad y vulnerabilidad

---

## Dependencias

| Dependencia | Versión |
| ------ | ------ |
| [react](https://es.reactjs.org/) | 16.10.1 |
| [react-dom](https://es.reactjs.org/docs/react-dom.html) | 16.10.1 |
| [webpack](https://webpack.js.org/) | 4.41.0 |
| [webpack-cli](https://www.npmjs.com/package/webpack-cli) | 3.3.9 |
| [webpack-dev-server](https://webpack.js.org/configuration/dev-server/) | 3.8.1 |
| [babel-loader](https://www.npmjs.com/package/babel-loader) | 8.0.6 |
| [prop-type](https://www.npmjs.com/package/prop-types) | 15.7.2 |
| [prettier](https://prettier.io/) | 1.18.2 |
| [eslint](https://www.npmjs.com/package/eslint) | 6.1.0 |

## Clonar proyecto

Para clonar el proyecto será necesario correr el siguiente comando

```sh
git clone https://github.com/Proskynete/specatelier-frontend.git
```

Luego nos movemos a la carpeta clonada con el siguiente comando

```sh
cd specatelier-frontend
```

## Hacer correr el proyecto

Para que el proyecto se pueda levantar correctamente, primero deberemos instalar las dependencias instaladas en el mismo (las cuales estan descritas en el archivo `package.json`), mediante el siguiente comando

```sh
npm install
```

Una vez termine la instalación podremos correr el siguiente comando

```sh
npm start
```

Esto hará que nuestro proyecto se pueda visualizar desde un navegador accediendo a `http://localhost:8080/`
