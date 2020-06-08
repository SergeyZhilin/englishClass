import axios from 'axios'

export default class Service {
    _baseURL = 'http://localhost:3030'

    async post(url, payload) {
       return await axios.post(`${this._baseURL}${url}`, payload)
    }

    async get(url, params = null) {
        return await axios.get(`${this._baseURL}${url}`, params)
    }

    // ---------------------------------------------------- //

    loginUser = async ({ payload }) => {
        console.log('vllf', payload)
        const { data } =  await this.post('/auth', payload)
        return data
    }

    createTest = async ({ payload }) => {
       const { data } = await this.post(`/add-test`, payload)
        console.log(data)
        return data
    }

     getTestByLevel = async (payload) => {
         const {data} = await this.get(`/`,{ params: { 'level': payload }})
         console.log(data)
         return data
    }

    submitTest = async (payload) =>  {
         const answersJson = JSON.stringify(payload.answers)
         const data = {...payload, answers: answersJson}
         console.log(data)
         return await this.post('/', data )
    }

    getAllTests = async () =>  {
        const { data } = await this.get(`/list`)
        console.log('data', data)
        return data;
    }

     getAllAnswers = async ({payload}) => {
         console.log(payload)
        const { data } = await this.get(`/list/${payload}`)
        return data;
    }
}