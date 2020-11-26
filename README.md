# Introduction
This is the practice for ReactJS

# Requisition
My document for installing NVM, NodeJS, NPM: 
https://docs.google.com/document/d/15oneMibwxSzn5xSj-WHJg65UHqiAAJ7TgUfTKG2bGVA/edit

# Build application

We need to download all dependencies, you can use either npm or yarn (but should not use both).
```
npm install 
```
or
```
yarn install 
``` 

# Start application
```
npm start
```
Then, you should see some URL in the console log like this:
```
Server ready at http://localhost:4000/ 
```
Open that link on the Browser

# Other command lines
- `npm run clean`: remove all `node_modules` from all submodules.
- `npm test`: for testing

# References
1. https://reactjs.org/tutorial/tutorial.html
1. Create `pro-01-react-simple` by using `npx`: https://reactjs.org/docs/create-a-new-react-app.html#create-react-app
1. Splitting Presentational Components (written as Functional Component) and Business Components: https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
     - Functional Component:  https://reactjs.org/blog/2015/10/07/react-v0.14.html#stateless-functional-components
     - Start building your app with just pPresentational Components first. 
      If you feel unsure about whether a specific component should be presentational or a container, it might be too early to decide. 
      Don’t sweat it! 
1. Props vs. State: https://kentcdodds.com/blog/props-vs-state      