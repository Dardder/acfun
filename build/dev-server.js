require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var appData = require('../data/homepage.json')
var appData2 = require('../data/play1.json')
var appData3 = require('../data/play2.json')
var appData4 = require('../data/game1.json')
var appData5 = require('../data/game2.json')
var appData6 = require('../data/article1.json')
var appData7 = require('../data/article2.json')
var appData8 = require('../data/search1.json')
var appData9 = require('../data/animate1.json')
var appData10 = require('../data/animate2.json')
var appData11 = require('../data/music1.json')
var appData12 = require('../data/music2.json')
var homeData = appData.data
var playData1 = appData2.data
var playData2 = appData3.data
var gameData1 = appData4.data
var gameData2 = appData5.data
var articleData1 = appData6.data
var articleData2 = appData7.data
var searchData1 = appData8.data
var animateData1 = appData9.data
var animateData2 = appData10.data
var musicData1 = appData11.data
var musicData2 = appData12.data
var apiRoutes = express.Router()
apiRoutes.get('/homeData',function (req, res) {
  res.json({
    errno: 0,
    homeData: homeData
  })
})
apiRoutes.get('/playData1',function (req, res) {
  res.json({
    errno: 0,
    playData1: playData1
  })
})
apiRoutes.get('/playData2',function (req, res) {
  res.json({
    errno: 0,
    playData2: playData2
  })
})
apiRoutes.get('/gameData1',function (req, res) {
  res.json({
    errno: 0,
    gameData1: gameData1
  })
})
apiRoutes.get('/gameData2',function (req, res) {
  res.json({
    errno: 0,
    gameData2: gameData2
  })
})
apiRoutes.get('/articleData1',function (req, res) {
  res.json({
    errno: 0,
    articleData1: articleData1
  })
})
apiRoutes.get('/articleData2',function (req, res) {
  res.json({
    errno: 0,
    articleData2: articleData2
  })
})
apiRoutes.get('/searchData1',function (req, res) {
  res.json({
    errno: 0,
    searchData1: searchData1
  })
})
apiRoutes.get('/animateData1',function (req, res) {
  res.json({
    errno: 0,
    animateData1: animateData1
  })
})
apiRoutes.get('/animateData2',function (req, res) {
  res.json({
    errno: 0,
    animateData2: animateData2
  })
})
apiRoutes.get('/musicData1',function (req, res) {
  res.json({
    errno: 0,
    musicData1: musicData1
  })
})
apiRoutes.get('/musicData2',function (req, res) {
  res.json({
    errno: 0,
    musicData2: musicData2
  })
})
app.use('/api',apiRoutes)
var compiler = webpack(webpackConfig)
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

devMiddleware.waitUntilValid(function () {
  console.log('> Listening at ' + uri + '\n')
})

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }

  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
})
