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
}

module.exports = UserController;