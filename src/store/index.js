import { Storage } from '@ionic/storage';

const store = new Storage();
store.create();


export default{
    set:(token) =>{
        store.set('token', token);
    },
    get:() =>{
        const token = store.get('token');
        return token;
    },
}