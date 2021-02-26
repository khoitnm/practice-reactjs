# Steps to create this app
__Step 1: Create app__
``` 
npx create-react-app pro-00-react-ts-simple --template typescript
```

__Step 2: Start app__
```
npm start 
```

If you get error:
``` 
It looks like you're trying to use TypeScript but do not have typescript installed.
Please install typescript by running npm install typescript.
If you are not trying to use TypeScript, please remove the tsconfig.json file from your package root (and any TypeScript files).
```
It means that your project was not created with TypeScript enabled successfully.
Solution:
``` 
npm uninstall -g create-react-app
```
And then run step 1 to re-create project again.
Reference link for error and solution: https://create-react-app.dev/docs/adding-typescript/ 
