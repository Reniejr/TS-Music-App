import React, { useState, useEffect } from 'react'

//BOOTSTRAP IMPORTS
import { ProgressBar } from 'react-bootstrap'

//STYLE
import './Player.scss';

export default function Player() {
    return (
        <div id="deezer-player">
            <div className="main-controls">
                <i className="fas fa-step-backward"></i>
                <i className="fas fa-play"></i>
                <i className="fas fa-step-forward"></i>
            </div>
            <div className="track-info">
                <div className="title-like">
                    <span>title - artist</span>
                    <i className="far fa-heart"></i>
                </div>
                <div className="time-controls">
                    <span>00:00</span>
                    <ProgressBar now={20} />
                    <span>00:00</span>
                </div>
            </div>
            <div className="side-player">
                <div className="side-controls">
                    <i className="fas fa-redo"></i>
                    <i className="fas fa-random"></i>
                    <i className="fas fa-volume-up"></i>
                    <i className="fas fa-sliders-h"></i>
                </div>
                <div className="queue">
                    <img src="" alt="" />
                    <span>next title</span>
                </div>
            </div>
        </div>
    )
}
