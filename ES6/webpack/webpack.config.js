/**
 * webpack的配置文件名 webpack.config.js  命令行：  webpack
 * 
 * webpack的配置文件名不是默认的, webpack --config 配置文件名的路径
 * 
 * webpack --config webpack.dev.js --watch(监听)
 * 
 * webpack基于nodejs环境
 * 
 * 二、webpack四大核心：
 * 
 * 1>entry  入口
 * 
 * 数据类型:string|object|array
 * 
 * 2>output 出口
 * 
 * {
 *    filename:
 * 
 *    path: 必须是绝对路径 ：path.resolve(__dirname,'./dist') 
 * 
 *  __dirname:webpack命令的执行路径
 * }
 * 
 * 默认：dist/main.js
 * 
 * 3>loader 加载器  webpack本身只能识别js 
 * 
 * 4>plugin 插件 
 * 
 * mode:development（不会压缩）  production（会压缩）
 * 
 * 可以命令行：webpack --mode production/development
 * 
 * 可以在配置文件：
 * {
 *      mode:'development'
 * }
 * 
*/

const path  = require('path');

module.exports = {
    entry:{
        index:'./src/js/index.js',
        detail:'./src/js/detail.js'
    },
    output:{
        filename:'./js/[name].[hash].js',
        path:path.resolve(__dirname,'./dist')
    },
    module:{
        rules:[
            // {
            //     test:/\.js$/,
            //     loader:'babel-loader'
            // }

            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        "presets": ["@babel/preset-env"]
                    }
                }
            }
        ]
    }
}

