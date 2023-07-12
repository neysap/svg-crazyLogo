const { Triangle } = require('./shapes');

test('Triangle render method should return SVG string with shape color', () => {
  const shape = new Triangle();
  shape.setColor('blue');
  expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

test('Circle render method should return SVG string with shape color', () => {
    const shape = new Circle();
    shape.setColor('green');
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
  });

test('Square render method should return SVG string with shape color', () => {
    const shape = new Square();
    shape.setColor('#FF0000');
    expect(shape.render()).toEqual('<rect x="56" y="56" width="188" height="188" fill="#FF0000" />');
  });