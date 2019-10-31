import { Controller } from 'egg';

export default class UserController extends Controller {
    public async login() {
        const { ctx } = this;
        const { tel, password } = ctx.request.body
        ctx.body = await ctx.service.user.login({ tel, password });
    }
}
