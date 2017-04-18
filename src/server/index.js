import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import morgan from 'morgan';
import config from '../../configs/webpack.config';

let app = express();

// livereload
// test
let compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));
app.use(webpackHotMiddleware(compiler));

// logging
app.use(morgan('dev'));

// serve static files
app.use(express.static(path.join(__dirname, '../public')));

// render
app.get('/*', (req, res, next) => {
  res.send(`<!doctype html>
<html lang="utf-8">
<head>
  <title>React-Starter</title>
  <link rel="stylesheet" href="//cdn.rawgit.com/TeaMeow/TocasUI/master/dist/tocas.min.css">
  <link rel="stylesheet" type="text/css" href="/css/app.css">
</head>
<body>
  <div id="root"></div>
  <script src="/js/bundle.js"></script>
</body>
</html>`);
  next();
});

let PORT = 3000;
app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`App is listening on port ${PORT}`);
});
