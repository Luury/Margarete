import { http } from './config'

export default {

    list: (token) => {
        return http.get('/transaction', { headers: { "Authorization": `Bearer ${token}` } })
    },

    transaction: (param, token) => {
        return http.get('/transaction/' + param, { headers: { "Authorization": `Bearer ${token}` } })
    },

    create: (request, token) => {
        return http.post('/transaction/create', request, { headers: { "Authorization": `Bearer ${token}` } })
    },

    update: (param, request, token) => {
        return http.put('/transaction/update/' + param, request, { headers: { "Authorization": `Bearer ${token}` } })
    },

    delete: (param, token) => {
        return http.delete('/transaction/delete/' + param, { headers: { "Authorization": `Bearer ${token}` } })
    }
}