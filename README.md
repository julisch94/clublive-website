# Club Live Website

[![Website](https://img.shields.io/badge/Website-Link-blue)](https://clublive.band/)
[![GitHub Actions Status](https://github.com/julisch94/clublive-website/workflows/Run%20Playwright%20Tests/badge.svg)](https://github.com/julisch94/clublive-website/actions)

## Project setup

1. Install [Node Version Manager](https://github.com/nvm-sh/nvm).
2. Run `nvm use` and follow the instructions.
3. Install yarn with `npm i -g yarn`
4. Install dependencies with `yarn`
5. Start project with `yarn dev`

### Compiles and minifies for production

```
yarn build
```

### Hot-reload

We are using Vite for fast start and hot-reload.

### Auto-formatting files

We are using prettier for auto-formatting. Make sure you have a prettier plugin installed in your IDE.
Please also make sure that it's using the `.prettierrc` config file provided in this project.

To confirm your configuration run the following command. It should not make any changes to your code base:
```
yarn prettify
```

### Deployment

We are using Netlify to deploy the page. Pushes to the main branch automatically trigger a deployment to production.
Opening a PR will also trigger a deployment, though to a dedicated ephemeral environment. Netlify has GitHub hooks
in-place that will post a URL to your PR deployment as part of the GitHub checks. You should be able to simply click
on that link and check out your changes live.
