//MAIN IMPORTS
import React, { PureComponent } from 'react'
import { withRouter, Link, RouteComponentProps } from 'react-router-dom'

//STYLE IMPORTS
import './SideBar.scss';

//PROPS IMPORTED



class SideBar extends PureComponent<RouteComponentProps> {
    render() {
        return (
            <nav id='side-bar'>
            <div className="logo">
                <img src="https://i.ibb.co/37rq6YJ/Deezer.png" alt=""/>
            </div>
            <ul className="side-menu">
                <li className="main-li">
                    <i className="fas fa-music"></i>
                    <span>Music</span>
                </li>
                <li className="main-li">
                    <i className="fas fa-microphone-alt"></i>
                    <span>Shows</span>
                </li>
                <li className="main-li">
                    <i className="far fa-folder"></i>
                    <span>Explore</span>
                </li>
                <li className="main-li">
                    <i className="far fa-heart"></i>
                    <span>Favourites</span>
                </li>
                <li>Favourite tracks</li>
                <li>Playlist</li>
                <li>Albums</li>
                <li>Artists</li>
                <li>Podcasts</li>
            </ul>
        </nav>
        )
    }
}

export default withRouter(SideBar)