module.exports = app => {
    const { router, io } = app;
    require('./router/user.js')(app);
}