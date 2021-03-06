// See http://brunch.io for documentation.
exports.files = {
  javascripts: {joinTo: 'app.js'},
  stylesheets: {joinTo: 'app.css'}
};

exports.plugins = {
  babel: {
    plugins: ['transform-object-rest-spread']
  },
  sass: {
    mode: 'native'
  }
};
