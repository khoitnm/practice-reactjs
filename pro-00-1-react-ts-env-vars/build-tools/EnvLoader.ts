// import { dotenv } from 'dotenv';
const dotenv = require('dotenv');
const result = dotenv.config()

console.log(`Loaded env variables when building app: ${JSON.stringify(process.env, null, 2)}`)

if (result.error) {
    console.error('Error when loading dotenv. Cause:', result.error);
}