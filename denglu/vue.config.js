const path =require("path")
module.exports={
    devServer:{
        proxy:{
            '/api':{
                target:'http://169.254.0.184:3000',
                changeOrigin:true,
                pathRewrite:{
                    '/api':''
                }
            }
        }
    }
}