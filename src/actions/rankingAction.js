import * as types from '../modules/constants/actionTypes'
import request from '../modules/api/httpUtil'
import api from '../modules/api/api'

export let rankingList = id => {
    return dispatch => {
        dispatch(getRankingDetailLoading(types.DISCOVER_CHARTS_DETAIL_LOADING, true))
        return request.get(api.DISCOVER_CHARTS_DETAIL(id), null,
            data => data.ok ? dispatch(getRankingDetailSuccess(data.ranking)) : dispatch(getRankingDetailSuccess(null)),
            error => dispatch(getRankingFailure(error))

        )
    }
}

let getRankingDetailLoading = (type, isLoadingDetail) => ({
    type,
    isLoadingDetail
})

let getRankingDetailSuccess = data => ({
    type: types.DISCOVER_CHARTS_DETAIL,
    isLoadingDetail: false,
    chartsDetail: data //data可能为null
})

let getRankingFailure = error => ({
    type: types.DISCOVER_CHARTS_DETAIL_FAILURE,
    error: JSON.stringify(error)
})