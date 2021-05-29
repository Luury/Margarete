import { http } from './config'

export default {

    create: (user) => {
        return http.post('/user/create', user)
    },

    auth: (credentials) => {
        return http.post('/user/auth', credentials)
    },

    update: () => {
        return http.put('')
    },

    delete: () => {
        return http.delete('')
    }
}