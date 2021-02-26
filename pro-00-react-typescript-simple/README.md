This folder just try to show a simple way to work with Redux by using Redux-Toolkit

In `./src`, you'll see different components such as `comp-00-simple`, `comp-01-simple-useSelect`, etc.
But actually, the application only load one of them (I don't use `Router` just to keep the logic as simple as possible), 
and that loaded component is configured in `./src/App.tsx`.

When running the application `localhost:3000`, open Browser's console to see when the component is started, useEffect, useSelect, etc.