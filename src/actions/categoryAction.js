import * as types from '../modules/constants/actionTypes'
import request from '../modules/api/httpUtil'
import api from '../modules/api/api'

export let discoverCategoryList = () => {
    return dispatch => {
        return request.get(api.DISCOVER_CATEGORY_LIST, null,//添加了fetch url的前缀，补全url
            (data) => {
                if (data.ok) {
                    dispatch(getCategoryListSuccess(data));
                }
            },
            (error) => {
                //todo
            })
    }
};

let getCategoryListSuccess = (data) => {
    // data contain three types female,male,press

    return {
        type: types.DISCOVER_CATEGORY_LIST,
        tags: data
    }
};