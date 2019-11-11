module.exports = app => {
    let { router } = app;
    let urlPre = `/api/user`
    // router.get(`${urlPre}/list`, 'base.index')
    router.post(`${urlPre}/create`, 'user.create')
}