import { Controller } from 'egg';

export default class UserController extends Controller {
    public async login() {
        const { ctx } = this;
        ctx.body = await ctx.service.user.login({ tel: '13333333333', password: '111111' });
    }
}
