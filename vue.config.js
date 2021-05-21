const path = require("path");

module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/need-for-driveMAG/" : "/",
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       "@": path.resolve(__dirname, "src/")
  //     }
  //   },
  //   module: {
  //     rules: [
  //       {
  //         test: /\.(|png|jpe?g|gif)$/i,
  //         loader: "file-loader",
  //         options: {
  //           name: "[path][name].[ext]"
  //         }
  //       }
  //     ]
  //   }
  // },
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      scss: {
        sassOptions: {
          includePaths: [path.resolve(__dirname, "src/styles/theme/")],
          indentedSyntax: false
        },
        additionalData: `@import "~@/styles/_variables.scss"; @import "~@/styles/index.scss"; @import "~@/styles/theme/index.css";`
      }
    }
  },
  // assetsDir: "@/assets/",
  devServer: process.env.NODE_ENV === "production" ? {} : proxy()
};

function proxy() {
  return {
    proxy: {
      "/api": {
        target: "https://api-factory.simbirsoft1.com/api",
        secure: false,
        logLevel: "debug",
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  };
}
