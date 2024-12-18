# Run from pipeline which use a Java project
This command line will:
- install node & npm
- convert package.json5 to package.json
- install dependencies from package.json with `npm install`
- build web app project, and package it into a jar file
```
mvn install
```

# Run from local machine
## Convert package.json5 to package.json
```
./convert_packageJson.bat
npm install --no-audit
npm start
```
