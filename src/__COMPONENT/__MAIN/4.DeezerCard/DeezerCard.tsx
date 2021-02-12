import React, { useState, useEffect, MouseEvent } from 'react'

//REDUX IMPORTS
import { useSelector, useDispatch } from 'react-redux'
import { MainState } from '../../../_STORE'

//REDUX UTILITIES IMPORTS
import { addTrack } from '../../../_STORE/tracklist/action'

//INTERFACE IMPORTS
import { IDeezerFetchInfo, ArtistInfo, Album } from '../../../__TYPES'

//STYLE IMPORTS
import './DeezerCard.scss';

//PROPS

export default function DeezerCard(props: IDeezerFetchInfo) {

    const trackList = useSelector((state: MainState) => state)
    
    const dispatch = useDispatch()

    
    const addTracks = (e: React.MouseEvent<HTMLParagraphElement>) => {
        e.preventDefault()
        let track: string = e.currentTarget.innerText
        dispatch(addTrack(track))
    }

    return (    
        <div className="deezer-card track">
            <img src={props.album.cover_medium} alt="" />
            <p onClick={addTracks}>{props.title}</p>
            <p>{props.artist.name}</p>
            <p>{props.album.title}</p>
        </div>
    )
}


