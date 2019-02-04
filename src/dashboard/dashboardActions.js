import axios from 'axios'

const BASE_URL_LIST = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=114'

export function getList(URL = BASE_URL_LIST) {
    return dispatch => {
        const request = axios.get(URL)
            .then(resp => dispatch({type: 'POKEMON_LIST_FETCHED', payload: resp}))
    }
}

const BASE_URL_STATS = 'https://pokeapi.co/api/v2/pokemon/45/'

export function getStats(URL = BASE_URL_STATS) {
    return dispatch => {
        const request = axios.get(URL)
            .then(resp => dispatch({type: 'POKEMON_STATS_FETCHED', payload: resp}))
    }
}