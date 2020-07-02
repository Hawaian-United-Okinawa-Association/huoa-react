var WebFont = require('webfontloader');

const fonts = () => {
  WebFont.load({
    google: {
      families: [ 'Open Sans', 'Poppins', 'Lora' ]
    }
  })
};

export default fonts();
