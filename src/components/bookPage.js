import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { BackTop } from 'antd'
import request from '../modules/api/httpUtil'
import api from '../modules/api/api'
import BookDetailContent from './common/common-modules/BookDetailContent'
class Book extends PureComponent {
    constructor(props) {
        super(props)
        this.bookId = this.props.location.search.split('=')[1]
        //console.log(this.bookId)
        this.state = {
            bookId: this.bookId,
            bookDetail: {},
            bookChapterList: [],
            state: 'loading',//做数据加载时标识
        }
    }

    fetchBookDetail = async (bookId) => {
        try {
            this.setState({
                state: 'loading'
            })
            let res1 = await fetch(api.BOOK_DETAIL(bookId))
            let data1 = await res1.json()
            let res2 = await fetch(api.READ_BOOK_CHAPTER_LIST(bookId))
            let data2 = await res2.json()

            console.log(data1)
            this.setState({
                bookDetail: data1,
                bookChapterList: data2.mixToc.chapters,
                state: 'hidden'
            })
        } catch (error) {
            //todo
        }
    }

    componentDidMount() {
        this.fetchBookDetail(this.state.bookId)
    }

    renderContent(type) {
        let content = <div/>
        content = (type === 'loading' ? <div className="loading">加载中</div> : 
            <BookDetailContent bookChapterList={this.state.bookChapterList}
                bookDetail={this.state.bookDetail}
            />    
        )
        return content
    }

    render() {
        return (
            <div className="page-detail-container">
                <BackTop />
                {this.renderContent(this.state.state)}
            </div>
        )
    }
}

export default Book