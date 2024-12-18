import React from 'react';
import sampleRestClient from "./samplerestcall/SampleRestClient";

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
        </div>
    );
}

export default App;
