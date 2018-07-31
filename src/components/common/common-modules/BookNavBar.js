import {TabBar} from "antd-mobile"
import React, { PureComponent } from 'react'
import "../style/bookNavBar.css"
//加载网站下方导航栏图标
import bookshelves_unselected from '../image/book_unselected.svg'
import bookshelves_selected from '../image/book_selected.svg'
import recommend_unselected from '../image/recommend_unselected.svg'
import recommend_selected from '../image/recommend_selected.svg'
import rank_unselected from '../image/rank_unselected.svg'
import rank_selected from '../image/rank_selected.svg'
import my_unselected from '../image/my_unselected.svg'
import my_selected from '../image/my_selected.svg'

class BookNavBar extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: "readtab",
            hidden: false,
            fullScreen: false,
        }
    }

    renderContent(pageText) {
        return (
          <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
            <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
            <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
              onClick={(e) => {
                e.preventDefault();
                this.setState({
                  hidden: !this.state.hidden,
                });
              }}
            >
              Click to show/hide tab-bar
            </a>
            <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
              onClick={(e) => {
                e.preventDefault();
                this.setState({
                  fullScreen: !this.state.fullScreen,
                });
              }}
            >
              Click to switch fullscreen
            </a>
          </div>
        );
    }

    render() {
        return (
            <div style={this.state.fullScreen ? 
                {position: 'fixed', width: '100%', height: '100%', top: 0} 
                : {height: "20%"}}
            >
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        title="书架"
                        key="bookshelves"
                        icon={<div style={{
                        width: '22px',
                        height: '22px',
                        background: `url(${bookshelves_unselected}) center center /  21px 21px no-repeat` }}
                        />
                        }
                        selectedIcon={<div style={{
                        width: '22px',
                        height: '22px',
                        background: `url(${bookshelves_selected}) center center /  21px 21px no-repeat` }}
                        />
                        }
                        selected={this.state.selectedTab === 'blueTab'}
                        onPress={() => {
                        this.setState({
                            selectedTab: 'blueTab',
                        });
                        }}
                        data-seed="logId"
                    >
                        {this.renderContent('Life')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                        <div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${recommend_unselected}) center center /  21px 21px no-repeat` }}
                        />
                        }
                        selectedIcon={
                        <div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${recommend_selected}) center center /  21px 21px no-repeat` }}
                        />
                        }
                        title="精选"
                        key="recommed"
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
                        this.setState({
                            selectedTab: 'redTab',
                        });
                        }}
                        data-seed="logId1"
                    >
                        {this.renderContent('Koubei')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                        <div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${rank_unselected}) center center /  21px 21px no-repeat` }}
                        />
                        }
                        selectedIcon={
                        <div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${rank_selected}) center center /  21px 21px no-repeat` }}
                        />
                        }
                        title="排行榜"
                        key="rank"
                        selected={this.state.selectedTab === 'greenTab'}
                        onPress={() => {
                        this.setState({
                            selectedTab: 'greenTab',
                        });
                        }}
                    >
                        {this.renderContent('Friend')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri: my_unselected }}
                        selectedIcon={{ uri: my_selected }}
                        title="我的"
                        key="my"
                        selected={this.state.selectedTab === 'yellowTab'}
                        onPress={() => {
                        this.setState({
                            selectedTab: 'yellowTab',
                        });
                        }}
                    >
                        {this.renderContent('My')}
                    </TabBar.Item>
                </TabBar>
            </div>
        )
    }
}

export default BookNavBar