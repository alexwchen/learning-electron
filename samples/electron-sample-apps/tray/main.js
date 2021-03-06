var app = require('app');
var Tray = require('tray');
var Menu = require('menu');
var path = require('path');
var BrowserWindow = require('browser-window');

var iconPath = path.join(__dirname, 'icon.png');
var appIcon = null;
var win = null;

app.on('ready', function(){
  win = new BrowserWindow({show: false});
  appIcon = new Tray(iconPath);
  var contextMenu = Menu.buildFromTemplate([
    {
      label: 'Item1',
      type: 'radio',
      icon: iconPath
    },
    {
      label: 'Item2',
      submenu: [
        { label: 'submenu1' },
        { label: 'submenu2' }
      ]
    },
    {
      label: 'Item3',
      type: 'radio',
      checked: true
    },
    {
      label: 'Toggle DevTools',
      accelerator: 'Alt+Command+I',
      click: function() {
        win.show();
        win.toggleDevTools();
      }
    },
    { label: 'Quit',
      accelerator: 'Command+Q',
      selector: 'terminate:',
    }
  ]);
  appIcon.setToolTip('This is my application.');
  appIcon.setContextMenu(contextMenu);
});
