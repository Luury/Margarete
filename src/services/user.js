import { http } from './config'

export default {

    create: (user) => {
        return http.post('/user/create', user)
    },

    auth: (credentials) => {
        return http.post('/user/auth', credentials)
    },

    info: (token) => {
        return http.get('/user/info', { headers: { "Authorization": `Bearer ${token}` } })
    },

    update: () => {
        return http.put('')
    },

    delete: () => {
        return http.delete('')
    }
}