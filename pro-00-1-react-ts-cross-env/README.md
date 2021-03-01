# Purpose
In this project, I would like the check what would be generated in `./build/` when applying `cross-env` module.
That `./build/` is the result of `npm run build`

# Steps to create this app
Exactly the same as `pro-00-0-react-ts-simple`, please view its `README.md`

# Environment variables configuration
- Environment variables in NodeJS: https://www.twilio.com/blog/working-with-environment-variables-in-node-js-html#:~:text=and%20Node.,the%20value%20of%20NODE_ENV%20variable.
- cross-env: Introduction, Why, and How to use it: https://www.npmjs.com/package/cross-env
- dotenv: https://medium.com/dubizzletechblog/managing-environment-variables-in-nodejs-and-modern-js-apps-608003f4686c
    - "It does not override existing env variables and you can’t force it to do so." \
            Ref: https://www.twilio.com/blog/working-with-environment-variables-in-node-js-html#:~:text=and%20Node.,the%20value%20of%20NODE_ENV%20variable.
    - Multiple env files: dotenv recommends NOT using multiple .env files, but it really depends on the deployment approach. 
      Hence, if we need to use multiple `.env` files, here is some guideline: https://github.com/kerimdzhanov/dotenv-flow#files-under-version-control
    - dotenv doesn't work on client apps (such as ReactJS), it only works on back-end apps. So we need to somehow add environemtn variables at build time, not at runtime.
      Hence, the next link will help us how to do that.
- Guideline to add environment variables for ReactJS app: https://medium.com/@rishi.vedpathak/react-environment-specific-builds-using-env-with-cra-and-env-cmd-5960a1253fe6
    - Understanding about `NODE_ENV`: https://create-react-app.dev/docs/adding-custom-environment-variables/
      > "There is also a built-in environment variable called NODE_ENV. 
      You can read it from process.env.NODE_ENV. 
      When you run npm start, it is always equal to 'development', when you run npm test it is always equal to 'test', and when you run npm run build to make a production bundle, it is always equal to 'production'. 
      You cannot override NODE_ENV manually. 
      This prevents developers from accidentally deploying a slow development build to production.
      
# Other references
- Cypress and Instrumental: 
    - Why do we need Cypress Instrumental: https://www.cypress.io/blog/2019/09/05/cypress-code-coverage-for-create-react-app-v3/
    - Some guideline to use Cypress Instrumental: https://github.com/cypress-io/instrument-cra