import axios from 'axios';

const sampleRestClient = {
    async sendSampleRequest(): Promise<void | String> {
        const html: String = await axios.get(`https://google.com`);
        return html;
    }
}
export default sampleRestClient;
