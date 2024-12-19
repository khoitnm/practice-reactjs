REM convert package.json5 to package.json (node and npm doesn't work with *.json5, they only work with *.json)
call npx -y json5 -o package.json package.json5

REM install dependencies
call npm install --no-audit --no-fund