import { http } from './config'

export default {

    list: (token) => {
        return http.get('/budget', { headers: { "Authorization": `Bearer ${token}` } })
    },

    budget: (param, token) => {
        return http.get('/budget/' + param, { headers: { "Authorization": `Bearer ${token}` } })
    },

    create: (request, token) => {
        return http.post('/budget/create', request, { headers: { "Authorization": `Bearer ${token}` } })
    },

    update: (param, request, token) => {
        return http.put('/budget/update/' + param, request, { headers: { "Authorization": `Bearer ${token}` } })
    },

    delete: (param, token) => {
        return http.delete('/budget/delete/' + param, { headers: { "Authorization": `Bearer ${token}` } })
    }
}