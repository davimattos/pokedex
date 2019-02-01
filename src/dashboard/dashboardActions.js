import axios from 'axios'

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=57'

export function getList(URL = BASE_URL) {
    console.log(URL)
    return dispatch => {
        const request = axios.get(URL)
            .then(resp => dispatch({type: 'POKEMON_LIST_FETCHED', payload: resp}))
    }
}