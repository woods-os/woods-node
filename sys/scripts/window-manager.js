var pug = require('pug');

class Window {
    constructor (title, src, h=300, w=400, x=30, y=30) {
        this.title = title;
        this.src = src;
        this.height = h;
        this.width = w;
        this.left = x;
        this.top = y;
        this.windowContent = pug.renderFile(this.src);
    }
}

var wm = {
    windows: [],
    activeWindow: null,
    
    createWindow: function (title, src, h, w, x, y) {
        newWin = new Window(title, src, h, w, x, y);
        this.windows.push(newWin);
        this.activeWindow = newWin;
    }
};

module.exports(wm);