var remote = require('remote') // getting the main process from electron so we can call menu
var ipc = require('ipc') // very similar to remote, allows us to send calls back and forth between tht two processes
var Menu = remote.require('menu') // api from the electron api
var menu = Menu.buildFromTemplate([
  {
    label:'Electron',
    submenu:[
      {
        label:'Preferences',
        click: function(){
          ipc.send('show-prefs')
        }
      }
    ]
  }
])
Menu.setApplicationMenu(menu)
