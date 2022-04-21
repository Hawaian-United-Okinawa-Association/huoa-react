var WebFont = require('webfontloader');

const fonts = () => {
  WebFont.load({
    google: {
      families: ['Lora: 500,600,700', 'Poppins: 300,400,500,600,700'],
    },
  });
};

export default fonts();
