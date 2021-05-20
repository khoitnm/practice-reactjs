# Introduction

__The problem:__
This project is used to check the problem about `
```"build": "env-cmd -f .env.production react-scripts -r @cypress/instrument-cra build",```

We expect that command line to build with `.env.production` file only, but in reality, it also copies information from `.env.development` to `/build` folder which expose some security risk.
And we think that problem appears because of `@cypress/instrument-cra`.

I personally believe we don't need to do that with `build` command line, `@cypress/instrument-cra` should be useful for `start` script which run on `development` environment only?
However, I need to go back and research more carefully about `@cypress/instrument-cra`

---------------

OK, normally, we only need to use `@cypress/instrument-cra` on development because we run the cypress script inside the current source code.
However, there's a case that we want to write cypress script inside another app which will do end-to-end test for this app, and this app need to be built as production, but with `@cypress/instrument-cra` to check the test coverage.
That's why we need `@cypress/instrument-cra` on `production` environment.

# Research
- Understanding about code coverage and cypress instrument-cra: https://www.cypress.io/blog/2019/09/05/cypress-code-coverage-for-create-react-app-v3/
- https://github.com/cypress-io/instrument-cra
- CRA App (Create React App): https://create-react-app.dev/docs/getting-started/

