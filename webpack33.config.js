const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
	
  entry: { main: './aaa/rrr/main.js' },
  output: {
    path: path.resolve(__dirname, 'aaa/ppp'),
    filename: '[name].pack.js'
  },
  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
	  {
            test: /\.vue$/,
            use: ['vue-loader']
      },	   
	   { test: /\.(css|less|scss)$/, use: ['style-loader','css-loader'] }, 
        {test: /\.(png|svg|jpg|gif)$/,use: ['file-loader']},
        {test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader']}
    ]
  },
/*  //若vue采用完整写法需要添加，因为需要添加编译器；如果采用运行时写法，不需要添加；webpack打包已经预编译，建议采用运行时版本，因为light30%  
   resolve: {
     alias: {'vue$': 'vue/dist/vue.esm.js'}
  },  */
  plugins: [
    new VueLoaderPlugin()
    ]
};