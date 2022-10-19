const CracoLessPlugin = require('craco-less');
const lessModuleRegex = /\.module\.less$/;

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
      modifyLessRule: (lessRule, context) => {
        lessRule.test = lessModuleRegex;
        lessRule.exclude = /node_modules|antd\.css/;
        return lessRule;
      },

      cssLoaderOptions: {
        modules: { localIdentName: '[local]_[hash:base64:5]' },
      },
    },
  ],
};
