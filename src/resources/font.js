var WebFont = require('webfontloader');

const fonts = () => {
  WebFont.load({
    google: {
      families: [ 'Open Sans', 'Poppins: 100,300,600', 'Lora: 100,600' ]
    }
  });
};

export default fonts();
