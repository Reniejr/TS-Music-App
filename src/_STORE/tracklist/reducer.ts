import { ADD_TRACK, REMOVE_TRACK, SHUFFLE_TRACK, PREV_TRACK, NEXT_TRACK, SELECT_TRACK } from './constant'
import { TrackOptions } from './action'

interface TrackList{
    trackList: string[],
    selectTrack: string
}

const trackListState: TrackList = {
    trackList: [],
    selectTrack: ''
}

export const trackListReducer = (state = trackListState, action: TrackOptions): TrackList => {
    let currentTrack = state.trackList.indexOf(state.selectTrack)
    switch (action.type) {
        case ADD_TRACK: return {trackList: [...state.trackList, action.track], selectTrack: action.track}
        case REMOVE_TRACK: return { ...state, trackList: state.trackList.filter(track => track !== action.track)}
        case SHUFFLE_TRACK: return { ...state, selectTrack: state.trackList[action.index] }
        case PREV_TRACK:
            return { ...state, selectTrack: state.trackList[currentTrack - 1] }
        case NEXT_TRACK:
            return { ...state, selectTrack: state.trackList[currentTrack + 1] }
        case SELECT_TRACK:
            return { ...state, selectTrack: state.trackList[action.index]}
        default: return state
    }
}