const blacklist = require('metro-config/src/defaults/blacklist');

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false
      }
    })
  },
  resolver: {
    blacklistRE: blacklist([/template.*\/.*/])
  }
};
// 1. add the blacklist, to make sure scripts/templateK/***'s templates files is not need to be compiled - or I will get an compilation error
//    ref: https://stackoverflow.com/questions/41813211/how-to-make-react-native-packager-ignore-certain-directories
// 2.