/*
 * @Descripttion: 
 * @version: 
 * @Author: Yimi81
 * @Date: 2020-11-25 16:56:19
 * @LastEditors: Yimi81
 * @LastEditTime: 2020-11-26 09:53:11
 */
module.exports = {
    devServer: {
        //配置多个跨域
        proxy: {
            '/api': {
                target: 'http://115.238.176.150:6054',
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ''    //这里理解成用'/api'代替target里面的地址,比如我要调用'http://123.207.32.32:8000/user/add'，直接写'/api/user/add'即可
                }
            }
        }
    },
}