import React, { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { MainState } from '../../_STORE'

//UTILITIES IMPORTS

//INTERFACES IMPORTED
import { IDeezerFetchInfo, IHome} from '../../__TYPES'

//PERSONAL COMPONENTS IMPORTS
import DeezerCard from '../../__COMPONENT/__MAIN/4.DeezerCard/DeezerCard'

//STYLE IMPORTS
import './HomePage.scss';

export default function HomePage(props: IHome) {

    const trackList = useSelector((state:MainState) => state)

    console.log(trackList)

    return (
        <div id="home-page">
            <Row>
            {props.results.map((result:IDeezerFetchInfo) => {
                return (
                    <DeezerCard key={result.id} {...result}/>
                )
            })}
            </Row>
        </div>
    )
}
