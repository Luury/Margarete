import { http } from './config'

export default {

    list: (token) => {
        return http.get('/category', { headers: { "Authorization": `Bearer ${token}` } })
    },

    category: (param, token) => {
        return http.get('/category/' + param, { headers: { "Authorization": `Bearer ${token}` } })
    },

    create: (request, token) => {
        return http.post('/category/create', request, { headers: { "Authorization": `Bearer ${token}` } })
    },

    update: (param, request, token) => {
        return http.put('/category/update/' + param, request, { headers: { "Authorization": `Bearer ${token}` } })
    },

    delete: (param, token) => {
        return http.delete('/category/delete/' + param, { headers: { "Authorization": `Bearer ${token}` } })
    }
}