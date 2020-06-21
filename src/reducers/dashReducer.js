import { 
    CURRENT_LOADED,
    TOTAL_LOADED,
    COUNTRIES_LOADED,
    COUNTRY_LOADED,
    HISTORICAL_LOADED,
} from '../actions/types'

const initialState = {
    currentData: [],
    totalData: {},
    countriesHistorical: [],
    countryHistorical: null,
    allHistorical: []
}

export default function(state=initialState, action) {
    switch(action.type) {
        case CURRENT_LOADED:
            return {
                ...state,
                currentData: action.payload
            }
        case TOTAL_LOADED:
            return {
                ...state,
                totalData: action.payload
            }
        case HISTORICAL_LOADED:
            return {
                ...state,
                allHistorical: action.payload
            }
        case COUNTRIES_LOADED:
            return {
                ...state,
                countriesHistorical: action.payload
            }
        case COUNTRY_LOADED:
            return {
                ...state,
                countryHistorical: action.payload
            }
        default:
            return state
    }
}