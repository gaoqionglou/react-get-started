//不想使用这个方式,但是希望继续使用react-app-rewired、customize-cra插件




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