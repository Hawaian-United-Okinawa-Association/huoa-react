var WebFont = require('webfontloader');

const fonts = () => {
  WebFont.load({
    google: {
      families: ['Lora: 500,600,700', 'Poppins: 400,500,600,700', 'Open Sans: 400,500'],
    },
  });
};

export default fonts();
