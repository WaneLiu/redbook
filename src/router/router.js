import {Switch, BrowserRouter as Router, Route,} from 'react-router-dom'
import React from 'react'
import HomePage from '../components/homePage';
import RankPage from '../components/rankPage';
import BookNavBar from '../components/common/common-modules/BookNavBar';

const router = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/booknavbar" component={BookNavBar} />
            <Route exact path="/ranklist" component={RankPage}/>
        </Switch>
    </Router>
)
export default router