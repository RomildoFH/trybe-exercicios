const path = require('path');

console.log('Hello World!');

console.log(path.dirname('/usr/share/gnome'));

console.log(path.resolve('usr', 'share', 'gnome'));

console.log(path.resolve('/', 'usr', 'share', 'gnome'));