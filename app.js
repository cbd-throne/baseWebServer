module.exports = app => {
    app.once('server', server => {
        console.log(server, '成功运行了')
    })

    app.on('error', (err, ctx) => {})
    app.on('request',  ctx => {})
    app.on('response', ctx => {})
}