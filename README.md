# ClubLive Website

## Project setup

```
yarn
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Auto-formatting files

We are using prettier for auto-formatting. Make sure you have a prettier plugin installed in your IDE.
Please also make sure that it's using the `.prettierrc` config file provided in this project.

### Deployment

We are using Netlify to deploy the page. Pushes to the main branch automatically trigger a deployment to production.
Opening a PR will also trigger a deployment, though to a dedicated ephemeral environment. Netlify has GitHub hooks
in-place that will post a URL to your PR deployment as part of the GitHub checks. You should be able to simply click
on that link and check out your changes live.
