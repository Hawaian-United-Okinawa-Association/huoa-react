var WebFont = require('webfontloader');

const fonts = () => {
  WebFont.load({
    google: {
      families: ['Lora: 500', 'Poppins: 300,400,500,600', ]
    }
  });
};

export default fonts();
