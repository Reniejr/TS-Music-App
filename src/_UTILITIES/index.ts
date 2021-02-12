//TYPES IMPORTS
import { IHeadersFetch, IDeezerFetchInfo } from '../__TYPES'

//MAIN
const headers: IHeadersFetch = {
    'x-rapidapi-key': `${process.env['REACT_APP_RAPID_API_KEY']}`,
    'x-rapid-api-host': `${process.env['REACT_APP_RAPID_API_HOST']}`
}

const baseUrl: string | undefined= process.env['REACT_APP_RAPID_API_BASE_URL']

//FETCH SEARCH
export const fetchSearch = async (query: string) => {
    const response = await fetch(`${baseUrl}/search?q=${query}`, {
        headers: {
            'x-rapidapi-key': `${process.env['REACT_APP_RAPID_API_KEY']}`,
            'x-rapid-api-host': `${process.env['REACT_APP_RAPID_API_HOST']}`
            // ...headers
        } 
    })
    const results = await response.json()
    const infos: Array<IDeezerFetchInfo> = results.data
    // console.log(infos)
    return infos
}

//FETCH ALBUM
export const fetchAlbum = async (query: string) => {
    const response = await fetch(`${baseUrl}/album/${query}`, {
        headers: {
            'x-rapidapi-key': `${process.env['REACT_APP_RAPID_API_KEY']}`,
            'x-rapid-api-host': `${process.env['REACT_APP_RAPID_API_HOST']}`
            // ...headers
        } 
    })
    const results = await response.json()
    console.log(results)
    return results
}