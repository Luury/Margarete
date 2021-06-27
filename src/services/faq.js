import { http } from './config'

export default {

    faq: () => {
        return http.get('/faq')
    },
}