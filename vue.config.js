module.exports = {
    devServer:{
        host : 'localhost',
        port : 8080,
        proxy: {
            '/api':{
                target : 'https://www.imooc.com',
                changeOrigin : true,
                pathRewrite : {
                    '/api' : ''  //当拦截到/api时会把其转为空，并把其后面的地址拼接到target后面去
                }
            }
        }
    }
}