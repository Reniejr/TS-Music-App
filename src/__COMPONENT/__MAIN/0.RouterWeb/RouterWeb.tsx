//MAIN IMPORTS
import React, { PureComponent } from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//PERSONAL COMPONENTS IMPORTS
import HomePage from '../../../__PAGES/0.HomePage/HomePage'
import SideBar from '../1.SideBar/SideBar'
import SearchBar from '../2.SearchBar/SearchBar'
import Player from '../3.Player/Player'
//UTILITIES IMPORTS

//TYPES IMPORTS

//STYLE IMPORTS
import './RouterWeb.scss';

export default class RouterWeb extends PureComponent {

    state = {
        results: [],
        playingQueue: []
    }

    search = async (results: Array<{}>) => {
        this.setState({results: results})
    }

    render() {
        return (
            <div id="router-web">
                <Router>
                    <SideBar />
                    <SearchBar fetchSearch={(results) => this.search(results)} />
                    <Player/>
                    <Switch>
                        <Route path="/" exact render={(props) => <HomePage results={this.state.results} {...props}/>}/>
                    </Switch>
                </Router> 
            </div>
        )
    }
}
