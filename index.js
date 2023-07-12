const fs = require('fs');
let inquirer;

import('inquirer').then((inquirerModule) => {
  inquirer = inquirerModule.default;

  const { Triangle, Circle, Square } =
    require('./lib/shapes')

  // Prompt the user for input using Inquirer
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the text:',
        validate: (input) => {
          return input.length <= 3;
        },
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (keyword or hexadecimal number):',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Select a shape:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (keyword or hexadecimal number):',
      },
    ])
    .then((answers) => {
      // Create an instance of the selected shape class
      let shape;
      switch (answers.shape) {
        case 'circle':
          shape = new Circle();
          break;
        case 'triangle':
          shape = new Triangle();
          break;
        case 'square':
          shape = new Square();
          break;
        default:
          console.error('Invalid shape selected.');
          return;
      }

      // Set the color for the shape and text
      shape.setColor(answers.shapeColor);
      // Set the color for the text

      // Generate the SVG string for the logo
      const logoSvg = shape.render();
      // Replace with the actual method to generate the SVG

      // Save the SVG to a file named 'logo.svg'
      fs.writeFileSync('logo.svg', logoSvg);

      console.log('Generated logo.svg');
    })
    .catch((error) => {
      console.error(error);
    });
});