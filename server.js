var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config),
{
	quiet: false,
	stats: { colors:true },
	publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true,
	proxy: 
	{
		"/scripts/*": 
		{
			"target": 
			{
				"host": "127.0.0.1",
				"protocol": 'http:',
				"port": 80
			},
			secure: false
		}
	}
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:3000/');
});