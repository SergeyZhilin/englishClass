import axios from 'axios'

export default class Service {
    constructor() {}
    _baseURL = 'http://localhost:3030'

    async post(url, payload) {
        return await axios.post(`${this._baseURL}${url}`, payload)
    }

    async get(url, params = null) {
       return await axios.get(`${this._baseURL}${url}`, params)
    }

    // ---------------------------------------------------- //

    async loginUser(payload) {
        const {data} = await this.post('/auth', payload)
        console.log(data)
        return data;
        // return await this.post('/auth', payload)
    }

    async createTest(payload) {
        return await this.post(`/add-test`, payload)
    }

    async getTestByLevel(payload) {
        const { data } = await this.get(`/`,{ params: { 'level': payload }})
        return data
    }

     submitTest(payload) {
        console.log('payload', payload)
        // return await axios.post('/', payload)
    }

    async getAllTests() {
        const {data} = await this.get(`/list`)
        console.log(data)
        return data;
    }

    async getAllAnswers(payload) {
        const { data } = await this.get(`/list/${payload}`)
        return data;
    }

}