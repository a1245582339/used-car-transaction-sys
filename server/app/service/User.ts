import { Service } from 'egg';
export interface Account {
    tel: string;
    password: string;
}
export interface Token {
    code: string;
    token: string;
}
export interface UserInfo {
    
}
export default class User extends Service {
    public async login(User: Account): Promise<Token> {
        return {
            code: '20000',
            token: `${User.tel}+${User.password}`,
        };
    }
}
