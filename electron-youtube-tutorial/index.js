var app = require('app')
var BrowserWindow = require('browser-window')
var ipc = require('ipc')

app.on('ready', function(){
  var mainWindow = new BrowserWindow({
    width:800,
    height:600
  })
  mainWindow.loadUrl('file://' + __dirname + '/index.html')
  mainWindow.openDevTools()

  var prefsWindow = new BrowserWindow({
    width:400,
    height: 400,
    show:false
  })
  prefsWindow.loadUrl('file://'+__dirname+'/prefs.html')

  ipc.on('show-prefs',function(){
    prefsWindow.show()
  })
})
