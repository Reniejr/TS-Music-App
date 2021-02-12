import React, { useState, useEffect, ChangeEvent } from 'react'

//STYLE
import './SearchBar.scss';

//TYPES IMPORTS
import { IDeezerFetchInfo } from '../../../__TYPES'

//UTILITIES IMPORTS
import { fetchSearch } from '../../../_UTILITIES' 

interface Props {
    fetchSearch: (results: Array<{}>) => void
}


export default function SearchBar(props:Props) {

    const [query, setQuery] = useState('')

    const fillSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        let searching = e.currentTarget.value
        setQuery(searching)
    }

    const search = async (e: React.KeyboardEvent) => {
        if (e.key == 'Enter') {
            const result: Array<IDeezerFetchInfo>= await fetchSearch(query)
            props.fetchSearch(result)
        }
    }

    return (
        <div id="search-bar">
            <div className="search-container">
                <i className="fas fa-search"></i>
                <input type="text" id="search" placeholder="Search" onChange={fillSearch} onKeyDown={search}/>
            </div>
            <div className="user-container">
                <i className="fas fa-bell"></i>
                <img src="https://i.ibb.co/gyd9sQx/deezer-logo2.png" alt=""/>
            </div>
        </div>
    )
}
