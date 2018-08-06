import React, { PureComponent } from 'react'
//import PropTypes from 'prop-types'
import request from '../modules/api/httpUtil'
import api from '../modules/api/api'
import { BackTop } from 'antd';
import BookList from './common/common-modules/BookList'

class Search extends PureComponent {
    constructor(props) {
        super(props)
        let data = this.props.location.state
        this.searchText = data ? data.text : "大主宰"
        this.state = {
            searchState: false, //查找的状态，当为true时，表示正在获取服务器的数据
            searchResultsBookDetailList: []//查询到的结果-书籍详情列表
        }
    }

    componentDidMount() {
        request.get(api.SEARCH_BOOKS, {query: this.searchText},
            data => {
                this.setState({
                    searchResultsBookDetailList: data.books
                })
            },
            error => {
                //todo
                console.log(error)
            }
        )
    }

    render() {
        let bookList = this.state.searchResultsBookDetailList
        return (
            <div>
                <BackTop />
                { 
                    bookList == false ?
                    <div /> : <BookList bookListData={bookList} />    
                }                
            </div>
        )
    }
}

export default Search