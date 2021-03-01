import React from 'react';
import sampleRestClient from "./samplerestcall/SampleRestClient";
import loadEnvVars from "./envvar/EnvRuntimeLoader";

loadEnvVars();

function App() {
    const onClick = async () => {
        try {
            const result = await sampleRestClient.sendSampleRequest();
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <button onClick={onClick}>Sample Request</button>
            Hello
            <p>Env Vars: {JSON.stringify(process.env, null, 2)}</p>
        </div>
    );
}

export default App;
