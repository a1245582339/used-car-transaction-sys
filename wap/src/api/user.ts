import http from './config'
export interface Account {
    tel: string;
    password: string;
}
export const login = (account:Account) => {
    return http.post('/api/user/login', account)
}