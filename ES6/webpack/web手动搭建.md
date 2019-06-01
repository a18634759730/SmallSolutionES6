    const path = require('path');
    const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
    const htmlWebpackPlugin = require('html-webpack-plugin')
    module.exports = {
        entry:{
        入口文件
        },
        output:{
            filename:"/js/[name].[hash].js",
            path:path.resolve(__dirname,'./dist');
        },
        module{
            rules:[
                //js   需要下载包
                npm install babel-loader @babel/core @babel/preset-env webpack -D
                {
                    test:/\.js$/,
                    use:{
                        loader:'babel-loader',
                        options:{
                            'presets':['@babel/preset.nev']
                        }
                }
                },
                //scss 需要下载包
                    npm install extract-text-webpack-plugin@next -D
                    npm install style-loader -D
                    npm install css-loader -D
                    npm install node-sass -D
                    npm install sass-loader -D
                {   方法一
                    test:/\.scss$/,
                    use:['style-loader','css-loader','sass-loader']
                    方法二
                    test:/\.scss$/,
                    use:ExtractTextWebpackPligin({
                    fallback:'style-loader'
                        use:['css-loader','sass-loader']
                })
                },
                //img  需要下载包
                npm install url-loader -D
                npm install file-loader -D
                {
                    test:/\.(jpg|png|git|svg)$/,
                    use:{
                        loader:'url-loader',
                            options:{
                        limit:1234,
                                    name:'img/[name].[ext]',
                            publicPath:'/'
                        }
                    }
                },
                //html 需要下载包
                npm install html-loader -D
                {
                    test:/.\html$/,
                    use:{
                        loader:'html-loader',
                        options:{
                        filename:'/[name].[ext]'
                        }
                    }
                }
            ]
        },
        plugins:[
            //scss
            new ExtractTextWebpackPlugin({
                filename:'css/[name].css'
            }),
            // html 插件
            // 需要下载  npm install  html-webpack-plugin  -D
                new htmlWebpackPlugin({
                    template:'./scr/index.html',
                    title:'首页',
                })
        ]
        devServer:{
            启服务需要下载 webpack-dev-server
            port:9090,
            hot:true,
            before(app){
                app.get('./api/list',(req,res,next)=>{

                })
            }
        }
    }