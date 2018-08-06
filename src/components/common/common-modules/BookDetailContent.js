import React, { PureComponent } from 'react'
import {is, fromJS} from 'immutable'
import api from '../../../modules/api/api'
import { Button } from 'antd-mobile';
import history from '../../../router/history'
import  * as ConstData from '../../../modules/constants/ConstData'

class BookDetailContent extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            isShowChapterList: false
        }       
    }

    getWordCount(wordCount) {
        return wordCount > 10000 ? 
            (wordCount / 10000).toFixed(0) + '万字' : wordCount + "字"
    }

    getLatelyFollower(latelyFollower) {
        return latelyFollower > 10000 ?
            (latelyFollower / 10000).toFixed(2) + '万' : latelyFollower + ""
    }

    getChapterListClassName(){
        return this.state.isShowChapterList ?  "chapter-list":"chapter-list hidden-list";
    }

    render() {
        const {bookChapterList, bookDetail} = this.props
        if (JSON.stringify(bookDetail) === "{}") return <div/>
        return (
            <div>
                <div className="book-info">
                    <img 
                        src={api.IMG_BASE_URL + bookDetail.cover}
                        alt={bookDetail.title} className="cover"
                    />
                    <div className="info">
                        <h1>{bookDetail.title}</h1>
                        <p className="tags">
                            <i style={{background: "#86bfec"}}>{bookDetail.majorCate}</i>
                            <i style={{background: "#f5b572"}}>{bookDetail.minorCate}</i>
                        </p>
                        <p className="sup">
                            {bookDetail.author}<span>|</span>{bookDetail.minorCate}<span>|</span>{this.getWordCount(bookDetail.wordCount)}
                        </p>
                        <Button type="ghost" size="small"
                            onClick={() => {
                                history.push({
                                    pathname: "/read",
                                    state: {
                                        type: ConstData.READ_BOOK_START,
                                        bookName: bookDetail.title,
                                        bookId: bookDetail._id 
                                    }
                                })
                            }}
                        >
                            开始阅读
                        </Button>
                    </div>
                </div>
                <div className="book-data">
                    <div>
                        <i className="key">追书人数</i>
                        <i className="value">{this.getLatelyFollower(bookDetail.latelyFollower)}</i>
                    </div>
                    <div>
                        <i className="key">读者留存率</i>
                        <i className="value">{bookDetail.retentionRatio + "%"}</i>
                    </div>
                </div>
                <div className="book-section">
                    <h3>《{bookDetail.title}》简介:</h3>
                    <p className="content intro">
                        {bookDetail.longIntro}
                    </p>
                </div>
                <div className="book-section">
                    <h3>《{bookDetail.title}》目录:<span className="more"><i>全部章节</i><i onClick={()=>{
                        this.setState({
                            isShowChapterList:!this.state.isShowChapterList
                        });
                    }} className="arrow"/></span></h3>
                    <ul className={this.getChapterListClassName()}>
                        {bookChapterList.map((value, index) => {
                            return <li key={index}><Button onClick={() => {
                                history.push({
                                    pathname: '/read',
                                    state: {
                                        type:ConstData.READ_BOOK_MIDDLE,
                                        bookName:bookDetail.title,
                                        chapter: {chapterUrl:value.link,num:index,title:value.title},
                                        bookId: bookDetail._id
                                    }
                                });
                            }}>{value.title}</Button></li>;
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default BookDetailContent