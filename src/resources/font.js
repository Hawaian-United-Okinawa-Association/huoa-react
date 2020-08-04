var WebFont = require('webfontloader');

const fonts = () => {
  WebFont.load({
    google: {
      families: [ 'Open Sans', 'Poppins: 100,300,600,900', 'Lora: 300,600,900' ]
    }
  });
};

export default fonts();
