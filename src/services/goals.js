import { http } from './config'

export default {

    list: (token) => {
        return http.get('/goal', { headers: { "Authorization": `Bearer ${token}` } })
    },

    goal: (param, token) => {
        return http.get('/goal/' + param, { headers: { "Authorization": `Bearer ${token}` } })
    },

    create: (request, token) => {
        return http.post('/goal/create', request, { headers: { "Authorization": `Bearer ${token}` } })
    },

    update: (param, request, token) => {
        return http.put('/goal/update/' + param, request, { headers: { "Authorization": `Bearer ${token}` } })
    },

    delete: (param, token) => {
        return http.delete('/goal/delete/' + param, { headers: { "Authorization": `Bearer ${token}` } })
    }
}