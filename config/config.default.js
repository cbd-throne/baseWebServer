module.exports = {
    // body体的大小限制
    bodyParser: {
        jsonLimit: '1mb',
        formLimit: '1mb'
    },
    // 获取上传的文件
    multipart: {
        mode: 'file'
    },

    // sequelize
    sequelize: {
        dialect: 'mysql',
        database: 'throne',
        password: 'lnb521DouDou~~'
    },

    // websocket
    websocket: {},

    // 设置session
    key: 'EGG_KEY',
    maxAge: 86400000
}