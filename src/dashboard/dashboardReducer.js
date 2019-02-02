const INITIAL_STATE = { list: [{}], stats: [{}]}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'POKEMON_LIST_FETCHED':
            return {...state, list: action.payload.data }
        case 'POKEMON_STATS_FETCHED':
            return { ...state, stats: action.payload.data}
        default:
            return state
    }
}