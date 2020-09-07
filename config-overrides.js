const {
  addWebpackAlias, //创建别名
  addLessLoader, //配置less
  fixBabelImports, //引入
  override,//
  addDecoratorsLegacy//支持E7 
} = require('customize-cra')
const path = require('path')

module.exports = override(
  // @ 修饰器
  addDecoratorsLegacy(),//支持E7装饰器
  fixBabelImports('import', {
    libraryName: 'antd',//支持antd按区加载
    libraryDirectory: 'es',
    // 支持 less sass stylus
    style: true,
  }),
  // 支持 antd 主题定制
  addLessLoader({
    javascriptEnabled: true,
  }),
  // 别名
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    '@@': path.resolve(__dirname, 'src/components'),
  })
)
