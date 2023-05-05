// declaring the shapeMaker object
function shapeMaker() { }

// shape type prototype
shapeMaker.prototype.makeShape = (shape) => {
    this.shapetype = shape;
}

// shape color prototype
shapeMaker.prototype.setColor = (scolor) => {
    this.shapecolor = scolor;
}


// text prototype
shapeMaker.prototype.text = (stext, tcolor) => {
    this.text = stext;
    this.textcolor = tcolor;
}

// Render prototype returns the svg file contents
shapeMaker.prototype.render = () => {
    if (this.shapetype && this.shapecolor && this.textcolor) {
        if (this.shapetype == 'circle') {
            return `<circle cx="85" cy="80" r="70" fill="${this.shapecolor}"/><circle/>`;
        } else if (this.shapetype == 'triangle') {
            return `<polygon points="10, 150 160, 150 85, 10" x="25" y="75" fill="${this.shapecolor}"/><polygon/>`;
        } else if (this.shapetype == 'square') {
            return `<rect x="10" y="10" width="150" height="150" fill="${this.shapecolor}"></rect>`;
        }
    }else {
        console.log('one input was not recognized');
    }
}

// exporting shapemaker
module.exports = shapeMaker;