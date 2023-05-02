// declaring the shapeMaker object
function shapeMaker() {}

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
    if (this.shapetype == 'circle') {
        return `<${this.shapetype} cx="25" cy="75" r="20" stroke="${this.shapecolor}" fill="${this.textcolor}"/>${this.text}<${this.shapetype}/>`;
    }else if (this.shapetype == 'triangle') {
        return `<polygon points="10, 100 110, 100 55, 10" x="25" y="75" stroke="${this.shapecolor}" fill="${this.textcolor}"/>${this.text}<polygon/>`;
    }else if (this.shapetype == 'square') {
        return ''
    }else {
        console.log('not recognized')
    }
}

// exporting shapemaker
module.exports = shapeMaker;