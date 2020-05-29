import axios from 'axios'

export default class Service {
    constructor() {}

    baseURL = 'http://localhost:3030'

    async createTest(payload) {
        return await axios.post(`${this.baseURL}/add-test`, payload)
    }

    async getTestByLevel(payload) {
        const { data } = await axios.get(`${this.baseURL}`,{params: {'level': payload }})
        return data
    }

     submitTest(payload) {
        console.log('payload', payload)
        // return await axios.post('/', payload)
    }

    async getAllTests() {
        const { data } = await axios.get(`${this.baseURL}/list`)
        console.log(data)
        return data;
    }

    async getAllAnswers(payload) {
        const { data } = await axios.get(`${this.baseURL}/list/${payload}`)
        console.log(data)
        return data;
    }

}