// module.exports = (config)=>{
//     //如果没有使用customize-cra 在此对config进行配置
//     return config
// }

const { override, addDecoratorsLegacy, addLessLoader, fixBabelImports } = require('customize-cra')
const theme = require('./theme')

module.exports = override(
    // fixBabelImports
    fixBabelImports(
        'import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css'
    }
    ),
    addDecoratorsLegacy(),
    //addLessLoader必须在fixBabelImports之后配置否则样式不生效
    // addLessLoader({
    //     lessOptions: {
    //         modifyVars: theme,
    //         javascriptEnabled: true,
    //     },
    // }),

)