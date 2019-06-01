# webpack

    webpack 是一个模块打包器 打包所有的文件

    webpack 一切皆为模块

    webpack 和 gulp 类似

## gulp
 
  1.优化前端开发流程

## webpack

    1.用来进行模块化开发

    2.mode:'development',不会压缩 || production 会压缩  

    3.四大核心
    entry  入口 string || array || object
    只指定入口不指定出口 默认输出到dist文件夹下的main.js
  
> output 出口
  
    默认是 dist/main.js  

    output:{
        filename :文件名,
        path:绝对路径 path.resolve(__dirname,'')
    }

> loader 加载器

    module:{
        rules:[
            {
                test/\.js$/  匹配文件
                loader: loader  
                use:{} array || string || objcet
                options:{} 对单前loader的配置
                exclude: /node.modules/ 排除文件夹
                include: 包含文件
            },
            ES6 -->ES5 babel-loader
            {}scss --> css
        ]
    }

> plugin  插件

    内部插件 外部插件

    webpack的配置文件名  webpack.config.js 命令行 webpack

    webpack的配置文件名不是默认的 webpack --config 配置文件名的路径

    webpack --config webpack.dev.js --watch(监听)
  
## 4.webpack用法

    npm install  webpack -g

    webpack ./src/js -o ./dist/js

## 5.webpack语法代码(自己手搭)

    module.exports = {
        entry:'文件路径'
        mode:'development', || production
        output:{
        filename :js/[name].[hash].js,   //hash 防止文件缓存
        path:绝对路径 path.resolve(__dirname,'./dist')
        },
        module:{
            rules: [
                //js
                {
                    test: /\.js$/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            "presets": ["@babel/preset-env"]
                        }
                    }
                },
                scss -->css  sass-loader node-sass css-loader style-loader
                // css 方法一
                {
                    test:/\.scss$/,
                    use:['sass-loader','node-sass','style-loader'] 
                    //执行顺序从哪右向左
                },
                //提取css文件 extract-text-wedpack-plugin
                安装:npm i extract-text-webpack-plugin@next -D
                使用:const ExtractTextPlugin = requier('extract-text-webpack-plugin');
                // css 方法二
                {
                    test:/\.scss$/,
                    use: new ExtractTextPlugin.extract({
                        fallback:'style-loader'
                            use:['css-loader','sass-loader']
                    })
                },
                // img 图片
                {
                    test:/\.(png|jpg|gif|svg)$/,
                    use:{
                        loader:'url-loader'
                        options:{
                            limit:1234，
                            name:'img/[name].[ext]',
                            publicPath:'/',
                        }
                     }
                }
                // html
                {
                    test:/\.html$/,
                    use:{
                        loader:'html-loader',
                        options:{
                            attr:['img','src']
                        }
                    }
                }
            ]
        },  
        plugins:[
            new ExtractTextPlugin({
                filename :js/index.css,
            }),
            new HtmlWebpackPlugin({
                template:'./src/index.html',
                title:'首页',
                inject:'head',
            })
            模块热更新
            new webpack.HotModuleReplacementPlugin({})
        ],
        devServer:{
            npm install webpack-dev-server -D启服务插件下载
            port:9090，
            host:'localhost',
            open:true,自动打开浏览器,
            before(app){
                app.get('/api/list',(req,res,next) => {
                    res.json()
                })
            }
            proxy:{ //设置代理
            './以什么开头的'：'代理到那个端口'
            }
            hot:true,
        },
        开发环境
        devtool:'cheap-module-eval-sourec-map',
        线上环境  
        devtool:'none'
    }

    clean-webpack-plugin 删除文件
    resolve:{ 简化路径
        alias:{
        '名称':path.resolve(__dirname.'文件所在路径')

            '名称':path.resolve(__dirname.'./dist/src/index.html') 精准
        }
    4}