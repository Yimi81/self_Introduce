/*
 * @Descripttion: 
 * @version: 
 * @Author: Yimi81
 * @Date: 2020-11-25 16:53:40
 * @LastEditors: Yimi81
 * @LastEditTime: 2020-11-26 09:12:39
 */
import axios from 'axios'

//添加请求拦截器
axios.interceptors.request.use(
    config => {
        //请求之前
        return config;
    },
    error => {
        //请求错误
        return Promise.reject(error);
    }
)

//添加响应拦截
axios.interceptors.response.use(
    response => {
        //响应之前
        return response;
    },
    error => {
        if (error && error.response)
        {
            let res = {};
            res.code = error.response.status;
            res.msg = throwErr(error.response.status, error.response);
            return Promise.reject(res);
        }
        return Promise.reject(error);
    }
)

//get,post请求封装
export default function request(method, url, data)
{
    method = method.toLocaleLowerCase();
    if (method == 'get')
    {
        return axios.get(url, { params: data });
    }
    else if (method == 'post')
    {
        return axios.post(url, data);
    }
}

// 捕捉服务端http状态码的方法
const throwErr = (code, response) => {
    let message = '请求错误'
    switch (code) {
        case 400:
            message = '请求错误'
            break
        case 401:
            message = '未授权，请登录'
            break
        case 403:
            message = '拒绝访问'
            break
        case 404:
            message = `请求地址出错: ${response.config.url}`
            break
        case 408:
            message = '请求超时'
            break
        case 500:
            message = '服务器内部错误'
            break
        case 501:
            message = '服务未实现'
            break
        case 502:
            message = '网关错误'
            break
        case 503:
            message = '服务不可用'
            break
        case 504:
            message = '网关超时'
            break
        case 505:
            message = 'HTTP版本不受支持'
            break
        default:
    }
    return message
}