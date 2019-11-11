module.exports = app => {
    // 声明string integer date 类型
    const { STRING, INTEGER, DATE} = app.Sequelize;

    // 定义user表模型
    const User = app.model.define('user', {
        email: STRING,
        password: STRING(32),
        created_at: DATE,
        updated_at: DATE
    })

    User.signin = async function() {
        return await this.findOne({
            where: {
                email: email
            }
        })
    }

    return User;
}