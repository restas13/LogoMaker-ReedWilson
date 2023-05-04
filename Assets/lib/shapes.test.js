const shapes = require('./shapes.js');

describe('shapes', () => {
    describe ('render', () => {
        it('should return the svg file code that is necessary for a proper svg image', () => {
            const output = '<circle cx="85" cy="80" r="70" fill="red"/><circle/>';

            const svgImage = new shapes();
            svgImage.makeShape('circle');
            svgImage.setColor('red');
            svgImage.text('RED', 'white');

            expect(svgImage.render()).toEqual(output);
        })
    })
})