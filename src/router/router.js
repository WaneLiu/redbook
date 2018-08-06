import {Switch, HashRouter as Router, Route,} from 'react-router-dom'
import React from 'react'
import HomePage from '../components/homePage';
import RankPage from '../components/rankPage';
import Read from '../components/readPage';

import BookNavBar from '../components/common/common-modules/BookNavBar';
import history from './history';
const router = () => (
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/bookshelves" component={BookNavBar} />
            <Route exact path="/recommend" component={BookNavBar} />
            <Route exact path="/rank" component={BookNavBar} />
            <Route exact path="/my" component={BookNavBar} />
            <Route exact path="/search" component={BookNavBar} />
            <Route path="/book" component={BookNavBar} />
            <Route exact path="/read" component={Read} />
            <Route exact path="/ranklist" component={RankPage}/>
        </Switch>
    </Router>
)
export default router