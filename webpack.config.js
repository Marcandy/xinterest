module.exports = {
	// the entry point (index.js) of our application
	entry: [
		// first element is only necessary for webpack dev server
		"webpack-dev-server/client?http://localhost:8080",
		"./src/app.js"
	]
	, module: {
		// informs webpack what to do with different file types
		loaders: [
			{
				test: /\.js/
				, exclude: /node_modules/
				, loader: "babel"
			},
			{ test: /\.css$/,
				loader: "style!css",
				exclude: [/node_modules/]
			},

			{
				// test: /\.sass/
				test: /\.scss$/
				, exclude: /node_modules/
				, loader: "style!css!sass"
			}
			,
			{
				test: /\.html$/
				, loader: "html"
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/,
				loader: "file"
			}

		]
	}
	// determines what file types webpack should resolve
	, resolve: {
		extensions: [ "", ".js", ".css" ]
	}
	// output information of the production file
	, output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
	}
	// Where to find index.html
	// Only necessary for webpack dev server
	, devServer: {
		contentBase: "./dist"
	}
};
