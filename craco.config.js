//结合Craco+babel-plugins-imports实现antd组件按需加载




// 作用是采用Craco插件去自定义antd主题
const CracoLessPlugin = require('craco-less');
const theme = require('./theme')
module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: theme,
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};