# Front-end project - SpecAtelier

**Recomendations:**

- This project is development with `12.10.0` [Node.js](https://nodejs.org/) version, it is recommended have equal version or up.
- It is recomended use `npm` and not `yarn`.

---

## Dependencies

| Dependency                                                             | Version |
| ---------------------------------------------------------------------- | ------- |
| [react](https://es.reactjs.org/)                                       | 16.10.1 |
| [react-dom](https://es.reactjs.org/docs/react-dom.html)                | 16.10.1 |
| [react-router-dom](https://www.npmjs.com/package/react-router-dom)     | 5.1.2   |
| [react-redux](https://www.npmjs.com/package/react-redux)               | 7.1.1   |
| [redux](https://www.npmjs.com/package/redux)                           | 4.0.4   |
| [webpack](https://webpack.js.org/)                                     | 4.41.0  |
| [webpack-cli](https://www.npmjs.com/package/webpack-cli)               | 3.3.9   |
| [webpack-dev-server](https://webpack.js.org/configuration/dev-server/) | 3.8.1   |
| [express](https://www.npmjs.com/package/express)                       | 4.17.1  |
| [babel-loader](https://www.npmjs.com/package/babel-loader)             | 8.0.6   |
| [prop-type](https://www.npmjs.com/package/prop-types)                  | 15.7.2  |
| [prettier](https://prettier.io/)                                       | 1.18.2  |
| [eslint](https://www.npmjs.com/package/eslint)                         | 6.1.0   |
| [axios](https://www.npmjs.com/package/axios)                           | 0.19.0  |

## Environments

| Environment | Script     | Description                                                             |
| ----------- | ---------- | ----------------------------------------------------------------------- |
| development | start:dev  | Run project with stubbs for development new features and/or fixing bugs |
| integration | start:int  | Run project for testing with backend in local                           |
| production  | start:prod | Run project in production with backend                                  |

## Clone project

To clone proyect, copy and paste the next snippet in you terminal

```sh
git clone https://github.com/Proskynete/specatelier-frontend.git
```

Then move to the folder created by writing the next snippet

```sh
cd specatelier-frontend
```

## Run project

First, we must install the project dependencies with this snippet (in the project path)

```sh
npm install
```

When finish the installation, copy and past in the terminal next snippet

```sh
npm run start:dev
```

With these steps, the project will be executed and we can see it by copying `http://localhost:8080` in your preferred browser
