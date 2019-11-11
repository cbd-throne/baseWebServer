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

    // cors
    security: {
        domainWhiteList: ['http://localhost:8080'],
        csrf: {
            headerName: 'x-csrf-token',
            ignoreJSON: true
        }
    },

    cors: {},

    // 设置session
    keys: 'EGG_KEY',
    maxAge: 86400000
}