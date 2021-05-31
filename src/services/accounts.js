import { http } from './config'

export default {

    list: (token) => {
        return http.get('/account', { headers: { "Authorization": `Bearer ${token}` } })
    },

    account: (param, token) => {
        return http.get('/account/' + param, { headers: { "Authorization": `Bearer ${token}` } })
    },

    create: (request, token) => {
        return http.post('/account/create', request, { headers: { "Authorization": `Bearer ${token}` } })
    },

    update: (param, request, token) => {
        return http.put('/account/update/' + param, request, { headers: { "Authorization": `Bearer ${token}` } })
    },

    delete: (param, token) => {
        return http.delete('/account/delete/' + param, { headers: { "Authorization": `Bearer ${token}` } })
    }
}