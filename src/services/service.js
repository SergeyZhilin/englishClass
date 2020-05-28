import axios from 'axios'
import {PEOPLE} from "../data";

export default class Service {

    constructor() {}

    async createTest(payload) {
        // console.log('data', payload)
        return await axios.post('/add-test', payload)
    }

    async getTestByLevel(payload) {
        return await axios.get('/', payload)
    }

    async submitTest(payload) {
        return await axios.post('/', payload)
    }

    getAllTests() {
        return PEOPLE
        // return await axios.get('/list')
    }

}