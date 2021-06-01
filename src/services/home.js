import { http } from './config'

export default {

    resume: (token) => {
        return http.get('/home', { headers: { "Authorization": `Bearer ${token}` } })
    },
    accounts: (token) => {
        return http.get('/home/accounts', { headers: { "Authorization": `Bearer ${token}` } })
    },
}