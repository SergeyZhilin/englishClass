import axios from 'axios'

export default class Service {

    _baseURL = process.env.REACT_APP_HOST_ENV

    async post(url, payload) {
       return await axios.post(`${this._baseURL}${url}`, payload)
    }

    async get(url, params = null) {
        return await axios.get(`${this._baseURL}${url}`, params)
    }

    // ---------------------------------------------------- //

    loginUser = async ({ payload }) => {
        const { data } =  await this.post('/auth', payload)
        localStorage.setItem('user', data.id)
        return data
    }

    createTest = async ({ payload }) => {
       const { data } = await this.post(`/add-test`, payload)
        return data
    }

     getTestByLevel = async (payload) => {
         const { data } = await this.get(`/`,{ params: { 'level': payload }})
         return data
    }

    getAllLevels = async () => {
        const { data } = await this.get(`/`, null)
        return data
    }

    submitTest = async (payload) =>  {
         const answersJson = JSON.stringify(payload.answers)
         const data = {...payload, answers: answersJson}
         return await this.post('/', data )
    }

    getAllTests = async () =>  {
        const { data } = await this.get(`/list`)
        return data;
    }

     getAllAnswers = async ({ payload }) => {
         localStorage.setItem('params', payload)
         const { data } = await this.get(`/list/${payload}`)
         console.log(data)
         return data;
    }
}