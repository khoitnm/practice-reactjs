# dotenv
Error on when running `require('dotenv').config()`: 
``` 
TypeError: fs.readFileSync is not a function
```

Reason: https://github.com/motdotla/dotenv/issues/323
 - "dot env does not work on a client builds." => It means that dotenv doesn't work when we are building a client app (which use ReactJS, for example). \ 
   It only works on back-end app.