const path =require("path")
module.exports={
    devServer:{
        proxy:{
            '/api':{
                target:'http://192.168.43.246:3000',
                changeOrigin:true,
                pathRewrite:{
                    '/api':''
                }
            }
        }
    }
}