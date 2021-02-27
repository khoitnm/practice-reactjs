import dotenv from 'dotenv';

const result = dotenv.config()

if (result.error) {
    console.error('Error when loading dotenv. Cause:', result.error);
}

console.log(`All env variables: ${JSON.stringify(process.env)}`);
console.log(`Load environments after init module: ${process.env.KEY1}, ${process.env.KEY2}`);

const envConfigLoader = {
    load: () => {
        console.log(`Load environments after loaded: ${process.env.KEY1}, ${process.env.KEY2}`);
    }
}
export default envConfigLoader;