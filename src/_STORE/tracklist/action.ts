//CONSTANTS IMPORT
import { ADD_TRACK, REMOVE_TRACK, SHUFFLE_TRACK, PREV_TRACK, NEXT_TRACK, SELECT_TRACK } from './constant'

//ACTIONS
//ADD
interface AddTrack {
    type: typeof ADD_TRACK;
    track: string
}

const addTrack = (track: string) => ({
    type: ADD_TRACK,
    track
})

//REMOVE
interface RemoveTrack {
    type: typeof REMOVE_TRACK;
    track: string
}

const removeTrack = (track: string) => ({
    type: REMOVE_TRACK,
    track
})

//SHUFFLE
interface ShuffleTrack {
    type: typeof SHUFFLE_TRACK;
    index: number
}

const shuffleTrack = (index: number) => ({
    type: SHUFFLE_TRACK,
    index
})

//PREV
interface PrevTrack {
    type: typeof PREV_TRACK;
}

const prevTrack = () => ({
    type: PREV_TRACK
})

//NEXT
interface NextTrack {
    type: typeof NEXT_TRACK;
}

const nextTrack = () => ({
    type: NEXT_TRACK
})

//SELECT_TRACK
interface SelectTrack {
    type: typeof SELECT_TRACK;
    index: number
}

const selectTrack = (index: number) => ({
    type: SELECT_TRACK,
    index
})

//EXPORT

export type TrackOptions = AddTrack | RemoveTrack | ShuffleTrack | PrevTrack | NextTrack | SelectTrack
export { addTrack, removeTrack, shuffleTrack, prevTrack, nextTrack, selectTrack}