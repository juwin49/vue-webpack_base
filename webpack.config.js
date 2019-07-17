
//用于在构建前清除dist目录中的内容
//const CleanWebpackPlugin = require('clean-webpack-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin');//打包vue插件
const webpack = require('webpack');
const path = require("path");
module.exports = {
	//模式，development开发模式，production生产模式(默认)(再压缩)，none
	//mode:'development',
	
	//出/入口文件配置项
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, 'static'),
		//**************第二次打包 （先删掉static中已有的[name].pack.js）
        filename: '[name].pack.js'
    },
	//模块
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: __dirname+'node_modules',
			include: __dirname+'src',
			use: [{
            loader: 'babel-loader',
            options: {presets: ['env']},
           }]
        }, 
		{ test: /\.vue$/,use: ['vue-loader']}, 
        { test: /\.(css|less|scss)$/, use: ['style-loader','css-loader'] },  
        {test: /\.(png|svg|jpg|gif)$/,use: ['file-loader']},
        {test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader']}
		]
    },
/*	  //若vue采用完整写法需要添加，因为需要添加编译器；如果采用运行时写法，不需要添加；webpack打包已经预编译，建议采用运行时版本，因为light30%  
    resolve: {
        alias: {'vue$': 'vue/dist/vue.esm.js'}
    },  */
	//插件，用于生产模板和各种功能扩展
	 plugins: [
      new VueLoaderPlugin()
	//new CleanWebpackPlugin()
    ], 
	//配置webpack开发服务器功能
	devServer:{
		contentBase:path.resolve(__dirname, './static'),
		host:'localhost',
		port:'8080',
		compress:true //服务器压缩是否开启
	}
	
};