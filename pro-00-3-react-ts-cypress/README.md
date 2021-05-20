# Introduction

__The problem:__
This project is used to check the problem about `
```"build": "env-cmd -f .env.production react-scripts -r @cypress/instrument-cra build",```

We expect that command line to build with `.env.production` file only, but in reality, it also copies information from `.env.development` to `/build` folder which expose some security risk.
And we think that problem appears because of `@cypress/instrument-cra`.

I personally believe we don't need to do that with `build` command line, `@cypress/instrument-cra` should be useful for `start` script which run on `development` environment only.

However, I need to go back and research more carefully about `@cypress/instrument-cra`

# Research

- https://github.com/cypress-io/instrument-cra
- CRA App (Create React App): https://create-react-app.dev/docs/getting-started/

