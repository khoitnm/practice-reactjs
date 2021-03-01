// This file will show an example that we cannot execute dotenv at runtime, it will show error as mentioned in
// https://github.com/motdotla/dotenv/issues/323 and https://medium.com/@rishi.vedpathak/react-environment-specific-builds-using-env-with-cra-and-env-cmd-5960a1253fe6
// "dot env does not work on a client builds."

const dotenv = require('dotenv');

const loadEnvVars = () => {
    const result = dotenv.config()
    if (result.error) {
        console.error('Error when loading dotenv. Cause:', result.error);
    } else {
        console.log(`All env variables after running dotenv.config(): ${JSON.stringify(process.env, null, 2)}`);
    }
}
export default loadEnvVars;