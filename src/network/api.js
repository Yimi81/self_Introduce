/*
 * @Descripttion: 
 * @version: 
 * @Author: Yimi81
 * @Date: 2020-11-25 16:53:45
 * @LastEditors: Yimi81
 * @LastEditTime: 2020-11-26 09:53:04
 */
import request from './http'

//测试
export const getWarehouseList = (params) => {
    return request('get','/api/rest/pda/warehouse/list/get',params)
}