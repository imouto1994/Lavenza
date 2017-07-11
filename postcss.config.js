module.exports = function() {
  return {
    plugins: [
      // Auto prefixing necessary CSS properties to support only Electron
      require("autoprefixer")({ browsers: ["Electron >= 1.6.11"] }),
      // Allow to define mixins in CSS
      require("postcss-mixins")(),
      // Allow to write nested CSS
      require("postcss-nested")(),
      // Allow to use variables in CSS
      require("postcss-simple-vars")(),
      // Auto transform `calc` if possible to reduce computation
      require("postcss-calc")(),
      // Remove comments
      require("postcss-discard-comments")(),
    ],
  };
};
