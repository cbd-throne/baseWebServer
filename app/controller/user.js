const Controller  = require('egg').Controller;

class UserController extends Controller {
    async create() {
        // this.ctx.body = 'hello world';
        const {ctx} = this
        const body = ctx.request.body;
        const model = ctx.model;
        console.log(body)
        let user = await model.User.findOne({ where: { email: body.email} })
        if(user == null) {
            let userCreate = await model.User.create({
                ...body
            })
            if(userCreate) {
                ctx.rotateCsrfSecret();
                ctx.body = {
                    code: 0,
                    message: 'create success',
                    data: userCreate
                }
            } else {
                ctx.body = {
                    code: 1,
                    message: "create error",
                    data: null
                }
            }
        } else {
            ctx.body = {
                code: 1,
                message: "has email",
                data: null
            }
        }
    }

    async login() {
        const { ctx } = this;
        const {email, password } = ctx.request.body;
        const User = ctx.model.User;
        let user = await User.findOne({ where: { email: email}});
        if(user) {
            if(user.password == password) {
                ctx.body = {
                    code: 0,
                    message: 'find user',
                    data: user
                }
            } else {
                ctx.body = {
                    code: 1,
                    message: 'password is wrong',
                    data: null
                }
            }
        } else {
            ctx.body = {
                code: 1,
                message: 'email not found',
                data: null
            }
        }
    }
}

module.exports = UserController;