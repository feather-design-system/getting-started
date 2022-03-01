const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: false,
  chainWebpack: (config) => {
    config.plugins.delete("fork-ts-checker");
  },
});
