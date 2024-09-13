const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// module.exports = {
//   devServer: {
//       proxy: {
//           '/': {
//               target: 'http://localhost:8080', // 后端运行的地址
//               changeOrigin: true,
//               pathRewrite: {
//                   '^/service': ''
//               }
//           }
//       }
//   }
// }
