import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk, { ThunkMiddleware } from 'redux-thunk';
import {trackListReducer} from './tracklist/reducer'
import { TrackOptions } from './tracklist/action'


declare global{
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    tracklist: trackListReducer
})

export type MainState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, composedEnhancer(applyMiddleware(thunk as ThunkMiddleware<MainState, TrackOptions>)))