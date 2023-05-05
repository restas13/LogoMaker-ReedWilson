const shapes = require('./shapes.js');

const svgImage = new shapes();
svgImage.makeShape('circle');
svgImage.setColor('red');
svgImage.text('RED', 'white');

console.log(svgImage);

describe('shapes', () => {
    describe('render', () => {
        it('should return the svg file code that is necessary for a proper svg image', () => {


            const output = `<circle cx="85" cy="80" r="70" fill="red"/><circle/>`;

            expect(svgImage.render()).toEqual(output);
        })
    })
})