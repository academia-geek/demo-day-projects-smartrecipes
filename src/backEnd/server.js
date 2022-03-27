const jsonserver = require('json-server')
const server = jsonserver.create()
const router = jsonserver.router('./productos/articles.json')
const middlewares = jsonserver.defaults()
server.use(middlewares)
server.use(router)
const port = process.env.PORT || 4001
server.listen(port, () => {
    console.log('Json Server is running');
})